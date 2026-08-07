import { siteConfig } from '../lib/site';

export default function robots() {
    const base = siteConfig.url.replace(/\/$/, '');

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/*/payment/', '/*/success/'],
            },
        ],
        sitemap: `${base}/sitemap.xml`,
    };
}
