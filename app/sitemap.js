import { absoluteUrl, locales, publicRoutes } from '../lib/site';

export default function sitemap() {
    const entries = [];

    for (const lang of locales) {
        for (const path of publicRoutes) {
            entries.push({
                url: absoluteUrl(lang, path),
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((locale) => [locale, absoluteUrl(locale, path)])
                    ),
                },
            });
        }
    }

    return entries;
}
