import {
    absoluteUrl,
    defaultLocale,
    locales,
    publicRoutes,
    sitemapHintsForPath,
} from '../lib/site';

export default function sitemap() {
    const entries = [];
    const lastModified = new Date();

    for (const lang of locales) {
        for (const path of publicRoutes) {
            const { priority, changeFrequency } = sitemapHintsForPath(path);
            const languageAlternates = Object.fromEntries(
                locales.map((locale) => [locale, absoluteUrl(locale, path)])
            );
            languageAlternates['x-default'] = absoluteUrl(defaultLocale, path);

            entries.push({
                url: absoluteUrl(lang, path),
                lastModified,
                changeFrequency,
                priority,
                alternates: {
                    languages: languageAlternates,
                },
            });
        }
    }

    return entries;
}
