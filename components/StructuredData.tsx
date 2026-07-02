import { SITE, FOOTER_INFO } from "@/lib/constants";

// Server-rendered JSON-LD. Organization.logo is what Google can show next to the brand.
export function StructuredData() {
    const organization = {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: "DevsDroid Software Agency",
        url: SITE.url,
        logo: `${SITE.url}/logo-square.png`,
        image: `${SITE.url}${SITE.ogImage}`,
        description: SITE.description,
        email: FOOTER_INFO.contact.email,
        telephone: FOOTER_INFO.contact.phone,
        priceRange: "$$",
        areaServed: "Worldwide",
        knowsAbout: [
            "Software Development",
            "Web Development",
            "Mobile App Development",
            "AI Assistants",
            "Business Automation",
        ],
        address: [
            {
                "@type": "PostalAddress",
                streetAddress: "114-A Gul E Daman Society, College Road",
                addressLocality: "Lahore",
                addressCountry: "PK",
            },
            {
                "@type": "PostalAddress",
                streetAddress: "86, 90 Paul St",
                addressLocality: "London",
                postalCode: "EC2A 4NE",
                addressCountry: "GB",
            },
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "32",
            bestRating: "5",
        },
        ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    };

    const website = {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        publisher: { "@id": `${SITE.url}/#organization` },
    };

    const graph = { "@context": "https://schema.org", "@graph": [organization, website] };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
