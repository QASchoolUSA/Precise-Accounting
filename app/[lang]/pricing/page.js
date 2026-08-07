import PricingCalculator from '../../../components/PricingCalculator';
import Link from 'next/link';
import { getDictionary } from '../../../get-dictionary';
import { buildPageMetadata } from '../../../lib/metadata';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/pricing/',
        title: lang === 'en' ? 'Pricing Estimate' : dict.navigation.pricing,
        description: lang === 'en' ? 'Get a price estimate for Tax Preparation and Bookkeeping services.' : dict.servicesPage.subtitle
    });
}

export default async function Pricing({ params, searchParams }) {
    const { lang } = await params;
    const resolvedSearchParams = await searchParams;
    const dict = await getDictionary(lang);
    const initialTab = resolvedSearchParams?.tab || 'tax';

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">{dict.pricingCalculator.review.requestTitle}</h1>
                    <p className="page-subtitle">{dict.servicesPage.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <PricingCalculator lang={lang} dict={dict.pricingCalculator} initialTab={initialTab} />

                    {/* Payroll section moved to /services/payroll */}
                </div>
            </section>
        </>
    );
}
