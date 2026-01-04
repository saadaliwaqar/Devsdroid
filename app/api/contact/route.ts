import { type NextRequest, NextResponse } from 'next/server';
import { put, list, type ListBlobResultBlob } from '@vercel/blob';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, projectScope } = body;

        if (!name || !email || !projectScope) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const timestamp = new Date().toISOString();
        // Sanitize name for filename
        const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const filename = `logs/submission-${safeName}-${Date.now()}.json`;

        const data = {
            name,
            email,
            projectScope,
            status: 'new',
            createdAt: timestamp,
        };

        // Store as JSON file in Vercel Blob
        const blob = await put(filename, JSON.stringify(data, null, 2), {
            access: 'public',
        });

        return NextResponse.json({ message: 'Message logged successfully', url: blob.url }, { status: 200 });
    } catch (error) {
        console.error('Error submitting form:', error);
        return NextResponse.json(
            { message: 'Error processing request' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const authHeader = request.headers.get('x-admin-password');
        if (authHeader !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // List all blobs with prefix 'logs/'
        const { blobs } = await list({ prefix: 'logs/' });

        // Fetch the content of each blob
        // Note: parallel fetching might be heavy if there are many logs, but okay for MVP/Admin
        const logs = await Promise.all(
            blobs.map(async (blob: ListBlobResultBlob) => {
                try {
                    const res = await fetch(blob.url);
                    if (!res.ok) return null;
                    const json = await res.json();
                    // Merge blob metadata with json content
                    return { ...json, url: blob.url, pathname: blob.pathname };
                } catch (e) {
                    console.error(`Error parsing blob ${blob.url}`, e);
                    return null;
                }
            })
        );

        // Filter out failed fetches and sort by date desc
        const validLogs = logs
            .filter((log): log is NonNullable<typeof log> => log !== null)
            .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return NextResponse.json({ logs: validLogs });
    } catch (error) {
        console.error('Error listing logs:', error);
        return NextResponse.json(
            { message: 'Error listing logs' },
            { status: 500 }
        );
    }
}
