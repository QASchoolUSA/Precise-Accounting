import { getDictionary } from '../../../get-dictionary';
import {
    buildBreadcrumbJsonLd,
    buildPageMetadata,
    buildWebPageJsonLd,
} from '../../../lib/metadata';
import { resourcesData } from '../../../lib/resources-data';
import ResourcesView from '../../../components/ResourcesView';
import JsonLd from '../../../components/JsonLd';
import PageHero from '../../../components/design/PageHero';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/resources/',
        title: dict.resourcesPage.title,
        description: dict.resourcesPage.subtitle,
    });
}

export default async function ResourcesPage({ params, searchParams }) {
    const { lang } = await params;
    const resolvedSearchParams = await searchParams;
    const dict = await getDictionary(lang);
    const initialCategory = resolvedSearchParams?.category || 'all';
    const schemas = [
        buildWebPageJsonLd({
            lang,
            path: '/resources/',
            name: dict.resourcesPage.title,
            description: dict.resourcesPage.subtitle,
            type: 'CollectionPage',
        }),
        buildBreadcrumbJsonLd(lang, [
            { name: dict.navigation.home, path: '/' },
            { name: dict.navigation.resources, path: '/resources/' },
        ]),
    ];

    return (
        <>
            <JsonLd data={schemas} />
            <PageHero title={dict.resourcesPage.title} subtitle={dict.resourcesPage.subtitle} />

            <section className="section" style={{ paddingTop: '2.5rem' }}>
                <div className="container">
                    <ResourcesView
                        lang={lang}
                        dict={{ ...dict.resourcesPage, getEstimate: dict.home.getEstimate }}
                        initialCategory={initialCategory}
                        articles={resourcesData}
                    />
                </div>
            </section>
        </>
    );
}
