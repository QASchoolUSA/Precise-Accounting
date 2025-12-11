import Link from 'next/link';

export const metadata = {
    title: 'Sales Tax | Precise Accounting',
    description: 'Sales tax calculation, filing, and compliance services.',
};

export default function SalesTaxServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Sales Tax</h1>
                    <p className="page-subtitle">Accurate multi-state sales tax compliance.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">Navigating sales tax rules can be complex. We provide accurate multi-state sales tax calculation, filing, and compliance services to ensure your business meets its obligations in every jurisdiction it operates in.</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="/contact" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
