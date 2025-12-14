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
                        <p className="mb-6">Accurate multi-state sales tax calculation, filing, and compliance.</p>
                        <p className="mb-6">We help ensure you’re charging, tracking, and remitting sales tax correctly, no matter how complex your sales channels are.</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="/contact" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">Sales tax rules can vary not only by state but by county, product type, and sales channel. We help you understand where your obligations begin, how to stay compliant with nexus requirements, and how to set up systems that ensure accurate collection and reporting.</p>
                            <p className="mb-6">Whether you operate locally in Florida or sell nationwide online we simplify compliance and reduce risk.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
