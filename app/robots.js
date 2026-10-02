import { siteConfig } from '../lib/site';

const AI_CRAWLERS = [
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'PerplexityBot',
    'Google-Extended',
    'Applebot-Extended',
];

export default function robots() {
    const base = siteConfig.url.replace(/\/$/, '');
    const disallow = ['/api/', '/*/payment/', '/*/success/'];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow,
            },
            ...AI_CRAWLERS.map((userAgent) => ({
                userAgent,
                allow: '/',
                disallow,
            })),
        ],
        sitemap: `${base}/sitemap.xml`,
    };
}
