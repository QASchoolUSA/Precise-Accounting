import PricingCalculator from '../../components/PricingCalculator';
import Link from 'next/link';

export const metadata = {
    title: 'Pricing Estimate | Precise Accounting',
    description: 'Get a price estimate for Tax Preparation and Bookkeeping services.',
};

export default function Pricing() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Price Estimate</h1>
                    <p className="page-subtitle">Transparent pricing tailored to your needs.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <PricingCalculator />

                    {/* Payroll section moved to /services/payroll */}
                </div>
            </section>
        </>
    );
}
