import { getDictionary } from '../../../get-dictionary';
import { buildPageMetadata } from '../../../lib/metadata';
import { resourcesData } from '../../../lib/resources-data';
import ResourcesView from '../../../components/ResourcesView';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/resources/',
        title: `${dict.resourcesPage.title} | Tax News, Insights & Guides`,
        description: dict.resourcesPage.subtitle,
    });
}

export default async function ResourcesPage({ params, searchParams }) {
    const { lang } = await params;
    const resolvedSearchParams = await searchParams;
    const dict = await getDictionary(lang);
    const initialCategory = resolvedSearchParams?.category || 'all';

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">{dict.resourcesPage.title}</h1>
                    <p className="page-subtitle">{dict.resourcesPage.subtitle}</p>
                </div>
            </section>

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
