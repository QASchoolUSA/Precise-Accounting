import {
    absoluteAssetUrl,
    absoluteUrl,
    defaultLocale,
    locales,
    siteConfig,
} from './site';

// Re-export JSON-LD builders so existing imports from lib/metadata keep working.
export {
    buildOrganizationJsonLd,
    buildPersonJsonLd,
    buildWebSiteJsonLd,
    buildBreadcrumbJsonLd,
    buildServiceJsonLd,
    buildContactPageJsonLd,
    buildWebPageJsonLd,
    buildServicePageSchemas,
    buildSitewideJsonLd,
} from './jsonld';

/**
 * Build Next.js Metadata for a locale + path without changing on-page content.
 * @param {{ lang: string, path: string, title: string, description: string, index?: boolean, type?: string }} options
 */
export function buildPageMetadata({
    lang,
    path,
    title,
    description,
    index = true,
    type = 'website',
}) {
    const canonical = absoluteUrl(lang, path);
    const languageAlternates = Object.fromEntries(
        locales.map((locale) => [locale, absoluteUrl(locale, path)])
    );
    languageAlternates['x-default'] = absoluteUrl(defaultLocale, path);

    const ogImage = absoluteAssetUrl(siteConfig.ogImagePath);
    const alternateLocale = lang === 'ru' ? 'en_US' : 'ru_RU';

    const metadata = {
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
            alternateLocale: [alternateLocale],
            type,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: siteConfig.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        robots: index
            ? { index: true, follow: true }
            : { index: false, follow: false },
    };

    const { google, bing } = siteConfig.verification || {};
    if (google || bing) {
        metadata.verification = {};
        if (google) metadata.verification.google = google;
        if (bing) metadata.verification.other = { 'msvalidate.01': bing };
    }

    return metadata;
}
