import Link from 'next/link';

export const metadata = {
    title: 'Books & Financial Records Reinstatement | Precise Accounting',
    description: 'Restore clarity and accuracy to your financial records.',
};

export default function BooksReinstatementServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Books & Financial Records Reinstatement</h1>
                    <p className="page-subtitle">Get your financials back on track.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">Restore clarity and confidence in your financials. We clean up and reinstate neglected or outdated books, ensuring full readiness for tax season, lender evaluations, or audit requirements, so your business is always prepared and protected.</p>
                        <p className="mb-6">Ready to get your financial records back on track?</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">Got a question?</h3>
                            <p className="cta-subtitle">Speak with a specialist or book a consultation.</p>
                            <div className="cta-actions">
                                <Link href="https://cal.com/precise-accounting" className="btn btn-primary">Schedule Consultation</Link>
                                <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">Falling behind on books happens, especially when a business is growing fast. But inaccurate financials can lead to IRS issues, cash-flow problems, denied funding, and costly tax amendments.</p>
                            <p className="mb-6">We step in and restore full accuracy: missing records re-created, errors corrected, accounts aligned, and everything prepared to meet tax or audit standards. You’ll walk away with clean, organized books and a renewed sense of control over your business.</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>Historical Reconstruction</h3>
                                <p>Rebuild missing transactions and statements for prior periods.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Error Correction</h3>
                                <p>Fix misclassifications and resolve discrepancies across accounts.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Full Reconciliation</h3>
                                <p>Align bank, credit, and merchant accounts to the ledger.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Reporting Readiness</h3>
                                <p>Prepare accurate financials for tax filing and lender reviews.</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">How It Works</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>Review</h4>
                                        <p>Assess current books and define reinstatement scope.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>Recreate</h4>
                                        <p>Rebuild missing records and correct inaccuracies.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>Reconcile</h4>
                                        <p>Align all accounts and verify balances are complete.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>Report</h4>
                                        <p>Deliver clean statements ready for tax and compliance.</p>
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
