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

                        <div className="cta mt-8">
                            <h3 className="cta-title">Got a question?</h3>
                            <p className="cta-subtitle">Speak with a specialist or book a consultation.</p>
                            <div className="cta-actions">
                                <Link href="/payment/consultation" className="btn btn-primary">Schedule Consultation</Link>
                                <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">Sales tax rules can vary not only by state but by county, product type, and sales channel. We help you understand where your obligations begin, how to stay compliant with nexus requirements, and how to set up systems that ensure accurate collection and reporting.</p>
                            <p className="mb-6">Whether you operate locally in Florida or sell nationwide online we simplify compliance and reduce risk.</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>Multi-State Nexus Assessment</h3>
                                <p>Identify where you have sales tax obligations and avoid missed filings.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Platform Integration</h3>
                                <p>Align marketplaces, POS, and e-commerce platforms for accurate collection.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Filing & Remittance</h3>
                                <p>Prepare, file, and remit in every jurisdiction on time, every time.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Audit Readiness</h3>
                                <p>Maintain records and reports that withstand state scrutiny.</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">How It Works</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>Assess</h4>
                                        <p>Review operations and determine nexus and requirements.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>Configure</h4>
                                        <p>Set up systems for accurate collection and tracking.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>Calculate</h4>
                                        <p>Apply correct rates and rules across channels and states.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>File</h4>
                                        <p>Prepare filings and remit payments before deadlines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
