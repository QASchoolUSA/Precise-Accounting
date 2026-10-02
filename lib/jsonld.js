import { absoluteAssetUrl, absoluteUrl, defaultLocale, siteConfig } from './site';

function organizationId() {
    return `${siteConfig.url.replace(/\/$/, '')}/#organization`;
}

function websiteId(lang = defaultLocale) {
    return `${absoluteUrl(lang, '/') }#website`;
}

function personId() {
    return `${siteConfig.url.replace(/\/$/, '')}/#person`;
}

/**
 * Core LocalBusiness / AccountingService / Organization entity.
 */
export function buildOrganizationJsonLd() {
    const { name, legalName, url, email, phone, address, sameAs, geo, hasMap, logoPath, ogImagePath } =
        siteConfig;
    const logo = absoluteAssetUrl(logoPath);
    const image = absoluteAssetUrl(ogImagePath);

    return {
        '@context': 'https://schema.org',
        '@type': ['AccountingService', 'LocalBusiness', 'Organization'],
        '@id': organizationId(),
        name,
        legalName,
        url,
        email,
        telephone: phone,
        image,
        logo,
        address: {
            '@type': 'PostalAddress',
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: geo.latitude,
            longitude: geo.longitude,
        },
        hasMap,
        sameAs,
        areaServed: [
            {
                '@type': 'Country',
                name: 'United States',
            },
            {
                '@type': 'State',
                name: 'Florida',
            },
            {
                '@type': 'City',
                name: 'Altamonte Springs',
            },
        ],
        employee: { '@id': personId() },
    };
}

/**
 * Owner / tax professional entity (schema only; no on-page copy changes).
 */
export function buildPersonJsonLd() {
    const { owner } = siteConfig;

    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': personId(),
        name: owner.name,
        jobTitle: owner.jobTitle,
        hasCredential: owner.credential,
        worksFor: { '@id': organizationId() },
        url: siteConfig.url,
    };
}

/**
 * WebSite node for the given locale homepage.
 */
export function buildWebSiteJsonLd(lang = defaultLocale) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId(lang),
        name: siteConfig.name,
        url: absoluteUrl(lang, '/'),
        inLanguage: lang === 'ru' ? 'ru-RU' : 'en-US',
        publisher: { '@id': organizationId() },
    };
}

/**
 * @param {string} lang
 * @param {{ name: string, path: string }[]} crumbs
 */
export function buildBreadcrumbJsonLd(lang, crumbs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: absoluteUrl(lang, crumb.path),
        })),
    };
}

/**
 * @param {{ lang: string, path: string, name: string, description: string }} options
 */
export function buildServiceJsonLd({ lang, path, name, description }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: absoluteUrl(lang, path),
        provider: { '@id': organizationId() },
        areaServed: {
            '@type': 'Country',
            name: 'United States',
        },
        serviceType: name,
    };
}

/**
 * @param {{ lang: string, path?: string, name: string, description: string }} options
 */
export function buildContactPageJsonLd({ lang, path = '/contact/', name, description }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name,
        description,
        url: absoluteUrl(lang, path),
        isPartOf: { '@id': websiteId(lang) },
        about: { '@id': organizationId() },
        mainEntity: { '@id': organizationId() },
    };
}

/**
 * @param {{ lang: string, path: string, name: string, description: string, type?: string }} options
 */
export function buildWebPageJsonLd({ lang, path, name, description, type = 'WebPage' }) {
    return {
        '@context': 'https://schema.org',
        '@type': type,
        name,
        description,
        url: absoluteUrl(lang, path),
        isPartOf: { '@id': websiteId(lang) },
        about: { '@id': organizationId() },
        inLanguage: lang === 'ru' ? 'ru-RU' : 'en-US',
    };
}

/**
 * Convenience bundle for a service detail page.
 * @param {{ lang: string, path: string, name: string, description: string, homeLabel: string, servicesLabel: string }} options
 */
export function buildServicePageSchemas({
    lang,
    path,
    name,
    description,
    homeLabel,
    servicesLabel,
}) {
    return [
        buildServiceJsonLd({ lang, path, name, description }),
        buildBreadcrumbJsonLd(lang, [
            { name: homeLabel, path: '/' },
            { name: servicesLabel, path: '/services/' },
            { name, path },
        ]),
        buildWebPageJsonLd({ lang, path, name, description }),
    ];
}

/**
 * Sitewide graph: Organization + Person + WebSite.
 */
export function buildSitewideJsonLd(lang = defaultLocale) {
    return [buildOrganizationJsonLd(), buildPersonJsonLd(), buildWebSiteJsonLd(lang)];
}
