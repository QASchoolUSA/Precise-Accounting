import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../get-dictionary';
import { buildPageMetadata } from '../../../../lib/metadata';
import { resourcesData } from '../../../../lib/resources-data';
import ResourcesView from '../../../../components/ResourcesView';

const VALID_CATEGORIES = ['tax-news', 'insights', 'guides'];

export async function generateStaticParams() {
    const langs = ['en', 'ru'];
    const params = [];
    for (const lang of langs) {
        for (const category of VALID_CATEGORIES) {
            params.push({ lang, category });
        }
    }
    return params;
}

export async function generateMetadata({ params }) {
    const { lang, category } = await params;
    if (!VALID_CATEGORIES.includes(category)) return {};

    const dict = await getDictionary(lang);
    const categoryName = category === 'tax-news'
        ? dict.resourcesPage.taxNews
        : category === 'insights'
        ? dict.resourcesPage.insights
        : dict.resourcesPage.guides;

    return buildPageMetadata({
        lang,
        path: `/resources/${category}/`,
        title: `${categoryName} | Precise Accounting`,
        description: `${categoryName} — ${dict.resourcesPage.subtitle}`,
    });
}

export default async function ResourceCategoryPage({ params }) {
    const { lang, category } = await params;
    if (!VALID_CATEGORIES.includes(category)) {
        notFound();
    }

    const dict = await getDictionary(lang);
    const categoryName = category === 'tax-news'
        ? dict.resourcesPage.taxNews
        : category === 'insights'
        ? dict.resourcesPage.insights
        : dict.resourcesPage.guides;

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">{categoryName}</h1>
                    <p className="page-subtitle">{dict.resourcesPage.subtitle}</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '2.5rem' }}>
                <div className="container">
                    <ResourcesView
                        lang={lang}
                        dict={{ ...dict.resourcesPage, getEstimate: dict.home.getEstimate }}
                        initialCategory={category}
                        articles={resourcesData}
                    />
                </div>
            </section>
        </>
    );
}
