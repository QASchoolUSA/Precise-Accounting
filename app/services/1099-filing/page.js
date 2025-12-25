import Link from 'next/link';

export const metadata = {
    title: '1099 Preparation & Filing | Precise Accounting',
    description: 'Fast and accurate 1099 preparation and filing services.',
};

export default function Form1099Services() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">1099 Preparation & Filing</h1>
                    <p className="page-subtitle">Compliance made simple for your contractors.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">We provide fast, accurate 1099 filing for your contractors, including preparation, IRS submission, and recipient copies. Ensure you meet all deadlines and avoid potential penalties with our streamlined service.</p>
                        <p className="mb-6">Even a single missing or incorrect contractor form can lead to IRS notices and penalties. We review payments, verify contractor details, prepare all required forms, and file electronically with the IRS ensuring full compliance and timely delivery.</p>
                        <p className="mb-6">Perfect for business owners who want to eliminate paperwork stress and protect their business from avoidable fines.</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">Got a question?</h3>
                            <p className="cta-subtitle">Speak with a specialist or book a consultation.</p>
                            <div className="cta-actions">
                                <Link href="/payment/consultation" className="btn btn-primary">Schedule Consultation</Link>
                                <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                            </div>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>Contractor Data Validation</h3>
                                <p>Verify names, TINs, addresses, and payment totals for accuracy.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Form Preparation</h3>
                                <p>Prepare correct forms for each contractor and payment type.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>IRS E‑Filing</h3>
                                <p>Submit electronically to the IRS to meet deadlines and reduce errors.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Recipient Copies</h3>
                                <p>Deliver official copies to contractors securely and on time.</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">How It Works</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>Gather</h4>
                                        <p>Collect contractor details and verify payment records.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>Prepare</h4>
                                        <p>Generate accurate forms based on validated information.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>File</h4>
                                        <p>E‑file with the IRS and track submission status.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>Deliver</h4>
                                        <p>Provide recipients with official copies and confirmations.</p>
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
