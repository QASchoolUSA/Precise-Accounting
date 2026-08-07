import { absoluteUrl, defaultLocale, locales, localizedPath, siteConfig } from './site';

/**
 * Build Next.js Metadata for a locale + path without changing on-page content.
 * @param {{ lang: string, path: string, title: string, description: string, index?: boolean }} options
 */
export function buildPageMetadata({ lang, path, title, description, index = true }) {
    const canonical = absoluteUrl(lang, path);
    const languageAlternates = Object.fromEntries(
        locales.map((locale) => [locale, localizedPath(locale, path)])
    );
    languageAlternates['x-default'] = localizedPath(defaultLocale, path);

    return {
        title,
        description,
        alternates: {
            canonical,
            languages: languageAlternates,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: siteConfig.name,
            locale: lang === 'ru' ? 'ru_RU' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
        robots: index
            ? { index: true, follow: true }
            : { index: false, follow: false },
    };
}

export function buildOrganizationJsonLd() {
    const { name, legalName, url, email, phone, address, sameAs } = siteConfig;

    return {
        '@context': 'https://schema.org',
        '@type': ['AccountingService', 'LocalBusiness', 'Organization'],
        name,
        legalName,
        url,
        email,
        telephone: phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
        },
        sameAs,
        areaServed: {
            '@type': 'Country',
            name: 'United States',
        },
    };
}
