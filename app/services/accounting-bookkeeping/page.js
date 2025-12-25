import Link from 'next/link';

export const metadata = {
    title: 'Accounting & Bookkeeping | Precise Accounting',
    description: 'Professional bookkeeping and financial reporting at a predictable monthly cost.',
};

export default function AccountingBookkeepingServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Accounting & Bookkeeping</h1>
                    <p className="page-subtitle">Professional bookkeeping and financial reporting.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">Professional bookkeeping and financial reporting, delivered at a predictable and simple monthly cost so you don’t need to hire a full-time employee.</p>
                        <p className="mb-6">Ready to hand off your bookkeeping with confidence?</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">Got a question?</h3>
                            <p className="cta-subtitle">Speak with a specialist or book a consultation.</p>
                            <div className="cta-actions">
                                <Link href="/payment/consultation" className="btn btn-primary">Schedule Consultation</Link>
                                <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                            </div>
                        </div>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic', textAlign: 'center' }}>
                            *Before you begin: the quote shown will be an estimated amount, not a final price. We’ll confirm the exact fee after a detailed review of your documents, your situation and complexity.
                        </p>

                        <div className="mt-8">
                            <p className="mb-6">Accurate books are the foundation of any successful business. When your financials are current and organized, you can confidently make decisions, apply for loans, plan for taxes, and measure profitability.</p>
                            <p className="mb-6">We manage your books with the same level of detail and care as if they were our own. Every transaction is categorized correctly, every account reconciled, and every report delivered on schedule—giving you full visibility into your business performance without the burden of doing it yourself.</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>Accurate Categorization</h3>
                                <p>Every transaction coded correctly for reliable reporting.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Bank Reconciliation</h3>
                                <p>Monthly reconciliation of bank, credit, and merchant accounts.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Monthly Reports</h3>
                                <p>Timely financial statements for informed decision‑making.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Quarterly Reviews</h3>
                                <p>Periodic analysis to prepare for taxes and growth.</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">How It Works</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>Onboard</h4>
                                        <p>Connect accounts and define categorization rules.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>Maintain</h4>
                                        <p>Update books weekly or monthly with reconciliations.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>Report</h4>
                                        <p>Deliver statements and insights on a predictable schedule.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>Review</h4>
                                        <p>Discuss performance and plan for the next quarter.</p>
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
