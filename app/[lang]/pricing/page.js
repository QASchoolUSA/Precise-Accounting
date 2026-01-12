import PricingCalculator from '../../../components/PricingCalculator';
import Link from 'next/link';
import { getDictionary } from '../../../get-dictionary';

export const metadata = {
    title: 'Pricing Estimate | Precise Accounting',
    description: 'Get a price estimate for Tax Preparation and Bookkeeping services.',
};

export default async function Pricing({ params: { lang }, searchParams }) {
    const dict = await getDictionary(lang);
    const initialTab = searchParams?.tab || 'tax';

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
