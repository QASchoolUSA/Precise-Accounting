export const locales = ['en', 'ru'];
export const defaultLocale = 'en';

export const siteConfig = {
    name: 'Precise Accounting',
    legalName: 'Precise Accounting LLC',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://proaccountingusa.com',
    email: 'contact@proaccountingusa.com',
    phone: '+14079667778',
    phoneDisplay: '+1(407) 966-7778',
    address: {
        streetAddress: '283 Cranes Roost Blvd, Suite 27',
        addressLocality: 'Altamonte Springs',
        addressRegion: 'FL',
        postalCode: '32701',
        addressCountry: 'US',
    },
    geo: {
        latitude: 28.6619,
        longitude: -81.3865,
    },
    hasMap:
        'https://www.google.com/maps/dir/?api=1&destination=283+Cranes+Roost+Blvd,+Suite+27,+Altamonte+Springs,+FL+32701',
    /** App Router metadata file routes (resolved against site URL). */
    logoPath: '/icon',
    ogImagePath: '/opengraph-image',
    owner: {
        name: 'Iana Korentsova',
        jobTitle: 'Owner & Tax Professional',
        credential: 'IRS Annual Filing Season Program (AFSP)',
    },
    sameAs: [
        'https://www.instagram.com/precisetaxes',
        'https://t.me/precisetaxes',
        'https://facebook.com/groups/1395083481908820/',
    ],
    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
        bing: process.env.BING_SITE_VERIFICATION || undefined,
    },
};

/** Public indexable paths (no locale prefix). Trailing slash for consistency with next.config. */
export const publicRoutes = [
    '/',
    '/services/',
    '/services/personal-tax/',
    '/services/business-tax/',
    '/services/accounting-bookkeeping/',
    '/services/estimated-tax/',
    '/services/tax-optimization/',
    '/services/books-reinstatement/',
    '/services/payroll/',
    '/services/1099-filing/',
    '/services/sales-tax/',
    '/services/new-business/',
    '/pricing/',
    '/resources/',
    '/resources/tax-news/',
    '/resources/insights/',
    '/resources/guides/',
    '/contact/',
    '/terms/',
];

export function localizedPath(lang, path = '/') {
    const normalized = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
    if (normalized === '/') {
        return `/${lang}/`;
    }
    return `/${lang}${normalized}`;
}

export function absoluteUrl(lang, path = '/') {
    const base = siteConfig.url.replace(/\/$/, '');
    return `${base}${localizedPath(lang, path)}`;
}

export function absoluteAssetUrl(assetPath) {
    const base = siteConfig.url.replace(/\/$/, '');
    const path = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
    return `${base}${path}`;
}

/** Sitemap priority / changeFrequency hints by path. */
export function sitemapHintsForPath(path) {
    if (path === '/') {
        return { priority: 1.0, changeFrequency: 'weekly' };
    }
    if (path === '/terms/') {
        return { priority: 0.3, changeFrequency: 'yearly' };
    }
    if (path.startsWith('/resources/')) {
        return { priority: 0.6, changeFrequency: 'weekly' };
    }
    if (
        path === '/services/' ||
        path.startsWith('/services/') ||
        path === '/contact/' ||
        path === '/pricing/'
    ) {
        return { priority: 0.8, changeFrequency: 'monthly' };
    }
    return { priority: 0.5, changeFrequency: 'monthly' };
}
