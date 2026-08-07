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
    sameAs: [
        'https://www.instagram.com/precisetaxes',
        'https://t.me/precisetaxes',
        'https://facebook.com/groups/1395083481908820/',
    ],
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
