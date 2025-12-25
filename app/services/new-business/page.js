import Link from 'next/link';

export const metadata = {
    title: 'New Business Entity Formation | Precise Accounting',
    description: 'Expert guidance for setting up your new business entity.',
};

export default function NewBusinessServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">New Business Entity Formation</h1>
                    <p className="page-subtitle">Start your business on the right foundation.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">We help you choose the right structure, file the required documents, and set up your business properly from day one.</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">Got a question?</h3>
                            <p className="cta-subtitle">Speak with a specialist or book a consultation.</p>
                            <div className="cta-actions">
                                <Link href="/payment/consultation" className="btn btn-primary">Schedule Consultation</Link>
                                <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">The structure you choose on day one affects your taxes, liability, paperwork, and future business options. We guide you step-by-step: selecting the right entity type, filing required documents, registering properly with Florida and other states agencies, and completing IRS elections such as S-Corp status if needed.</p>
                            <p className="mb-6">With a strong foundation, you avoid costly restructuring later, and start your business with confidence, clarity, and tax efficiency.</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>Entity Selection</h3>
                                <p>LLC, S-Corp, C-Corp, or sole proprietor—choose what fits your goals.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>EIN & Registrations</h3>
                                <p>Obtain EIN and complete state registrations accurately and quickly.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>IRS Elections</h3>
                                <p>Evaluate and file elections such as S-Corp when beneficial.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Books Setup</h3>
                                <p>Implement accounting systems and chart of accounts from day one.</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">How It Works</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>Discover</h4>
                                        <p>Understand your goals, risks, and operational needs.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>Form</h4>
                                        <p>Prepare and file formation documents and registrations.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>Elect</h4>
                                        <p>Analyze and submit IRS elections where advantageous.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>Set Up</h4>
                                        <p>Configure bookkeeping and reporting for ongoing compliance.</p>
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
