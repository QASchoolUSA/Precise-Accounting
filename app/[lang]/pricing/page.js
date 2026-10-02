import PricingCalculator from '../../../components/PricingCalculator';
import { getDictionary } from '../../../get-dictionary';
import {
    buildBreadcrumbJsonLd,
    buildPageMetadata,
    buildWebPageJsonLd,
} from '../../../lib/metadata';
import JsonLd from '../../../components/JsonLd';
import PageHero from '../../../components/design/PageHero';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/pricing/',
        title: dict.navigation.pricing,
        description: dict.servicesPage.subtitle,
    });
}

export default async function Pricing({ params, searchParams }) {
    const { lang } = await params;
    const resolvedSearchParams = await searchParams;
    const dict = await getDictionary(lang);
    const initialTab = resolvedSearchParams?.tab || 'tax';
    const schemas = [
        buildWebPageJsonLd({
            lang,
            path: '/pricing/',
            name: dict.navigation.pricing,
            description: dict.servicesPage.subtitle,
        }),
        buildBreadcrumbJsonLd(lang, [
            { name: dict.navigation.home, path: '/' },
            { name: dict.navigation.pricing, path: '/pricing/' },
        ]),
    ];

    return (
        <>
            <JsonLd data={schemas} />
            <PageHero title={dict.pricingCalculator.review.requestTitle} subtitle={dict.servicesPage.subtitle} />

            <section className="section">
                <div className="container">
                    <PricingCalculator lang={lang} dict={dict.pricingCalculator} initialTab={initialTab} />

                    {/* Payroll section moved to /services/payroll */}
                </div>
            </section>
        </>
    );
}
