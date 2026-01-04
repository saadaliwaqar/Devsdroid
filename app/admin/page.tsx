"use client";

import { useEffect, useState } from "react";
import { ListBlobResultBlob } from "@vercel/blob";
import { Terminal, RefreshCcw, Lock, FileJson } from "lucide-react";

interface ContactLog {
    name: string;
    email: string;
    projectScope: string;
    status: string;
    createdAt: string;
    url?: string;
}

export default function AdminPage() {
    const [logs, setLogs] = useState<ContactLog[]>([]);
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const res = await fetch('/api/contact', {
                headers: {
                    'x-admin-password': password
                }
            });

            if (res.ok) {
                const data = await res.json();
                setLogs(data.logs);
                setAuthenticated(true);
            } else {
                setError(true);
                setPassword("");
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const fetchLogs = async () => {
        setLoading(true);
        try {
            // In a real app, this should be a server acton or API route to avoid exposing list() token publicly
            // For now, we'll assume we have an API route to list blobs or use the Vercel Blob SDK purely if configured.
            // However, Vercel Blob client-side 'list' requires a token which might not be safe.
            // Better approach: create an API route /api/admin/logs that lists the blobs and their contents.

            // Re-evaluating: To fetch content, we need to list blobs, then fetch each JSON.
            // Let's create a temporary fetcher here that hits our own API. 
            // WAIT - I need to create the /api/admin/logs route first? 
            // Or I can just fetch them here if we assume this is a secure environment.
            // Given the constraints, I'll fetch the list via a new API route to simple avoid CORS/Auth issues client side.

            // ACTUALLY: Let's do it client side for simplicity if possible, but reading JSON from URL is easy.
            // Listing blobs requires a token. client-side `list` is available but needs `token`.
            // Let's assume we create a server action or simpler: just fetch from a new API route `GET /api/contact`?

            // Let's implement `GET` in `app/api/contact/route.ts` to list blobs! That's cleaner.

            const res = await fetch('/api/contact', {
                headers: {
                    'x-admin-password': password
                }
            });
            if (!res.ok) throw new Error("Failed to fetch logs");
            const data = await res.json();
            setLogs(data.logs);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Only fetch logs if already authenticated (e.g., after a successful login)
        // Or if we want to try an initial fetch with a stored password (not implemented here)
        if (authenticated) {
            fetchLogs();
        }
    }, [authenticated]);

    if (!authenticated) {
        return (
            <main className="min-h-screen bg-[#0B0F19] text-white p-8 font-mono flex items-center justify-center">
                <div className="max-w-md w-full border border-white/10 rounded-lg bg-black/50 overflow-hidden shadow-2xl">
                    <div className="bg-white/5 p-3 flex items-center gap-2 border-b border-white/10">
                        <Lock className="w-4 h-4 text-red-500" />
                        <span className="text-xs text-red-400">RESTRICTED_ACCESS</span>
                    </div>
                    <div className="p-8">
                        <div className="mb-6 text-center">
                            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h1 className="text-xl font-bold">SECURITY GATEWAY</h1>
                            <p className="text-slate-500 text-sm mt-2">Enter authorization code to proceed.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs text-primary">user@admin:~$ enter_passcode</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-2 text-white font-bold placeholder-slate-700 transition-colors"
                                    autoFocus
                                />
                            </div>

                            {error && (
                                <div className="text-red-500 text-xs animate-pulse">
                                    {`> ACCESS_DENIED. INVALID_CREDENTIALS.`}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-[#0B0F19] transition-all font-bold flex items-center justify-center gap-2 group disabled:opacity-50"
                            >
                                {loading ? 'AUTHENTICATING...' : 'UNLOCK_CONSOLE'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0B0F19] text-white p-8 font-mono">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                        <Lock className="w-8 h-8 text-green-500" />
                        <div>
                            <h1 className="text-2xl font-bold text-white">DevsDroid // ADMIN_CONSOLE</h1>
                            <p className="text-slate-400 text-sm">System Logs (Vercel Blob Storage) • <span className="text-green-500">SECURE</span></p>
                        </div>
                    </div>
                    <button
                        onClick={fetchLogs}
                        className="p-2 hover:bg-white/10 rounded transition-colors"
                        title="Refresh Logs"
                    >
                        <RefreshCcw className={`w-5 h-5 text-primary ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </header>

                <div className="border border-white/10 rounded-lg bg-black/50 overflow-hidden">
                    <div className="bg-white/5 p-3 flex items-center gap-2 border-b border-white/10">
                        <Terminal className="w-4 h-4 text-slate-500" />
                        <span className="text-xs text-slate-500">/var/logs/incoming_transmissions</span>
                    </div>

                    <div className="divide-y divide-white/10">
                        {loading && logs.length === 0 && (
                            <div className="p-8 text-center text-slate-500 animate-pulse">
                                {`> Fetching log files...`}
                            </div>
                        )}

                        {!loading && logs.length === 0 && (
                            <div className="p-8 text-center text-slate-500">
                                {`> NO_LOGS_FOUND.`}
                            </div>
                        )}

                        {logs.map((log, idx) => (
                            <div key={idx} className="p-6 hover:bg-white/5 transition-colors group">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <FileJson className="w-4 h-4 text-slate-500" />
                                            <span className="text-primary font-bold">{log.name}</span>
                                            <span className="text-slate-500 text-sm">&lt;{log.email}&gt;</span>
                                        </div>
                                        <div className="text-xs text-slate-600">
                                            {new Date(log.createdAt).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href={log.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-2 py-1 text-xs rounded border border-slate-700 text-slate-400 hover:text-white hover:border-white transition-colors"
                                        >
                                            RAW_JSON
                                        </a>
                                        <span className={`px-2 py-1 text-xs rounded border ${log.status === 'new' ? 'border-primary text-primary bg-primary/10' : 'border-slate-600 text-slate-400'
                                            }`}>
                                            {log.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div className="pl-4 border-l-2 border-white/10 group-hover:border-primary/50 transition-colors">
                                    <p className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                                        {log.projectScope}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
