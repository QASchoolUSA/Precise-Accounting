import Link from 'next/link';

export const metadata = {
    title: 'Estimated Tax | Precise Accounting',
    description: 'Estimated Tax services for self-employed and business owners.',
};

export default function EstimatedTaxServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Estimated Tax</h1>
                    <p className="page-subtitle">Stay ahead of your tax obligations.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">The IRS requires self-employed taxpayers and business owners to pay taxes quarterly. Falling behind can result in penalties. We determine accurate quarterly amounts for you and guide you through the schedule, ensuring you stay compliant and avoid surprise bills.</p>
                        <p className="mb-6">Quarterly taxes can be confusing, especially when income fluctuates. Instead of guessing and risking penalties, we calculate precise payment amounts based on your income trends, business projections, and tax law changes.</p>
                        <p className="mb-6">We help you plan your cash flow through the year, avoid unwanted IRS letters, and stay ahead of deadlines. With us, estimated taxes become predictable and manageable, helping you feel prepared instead of stressed.</p>
                        <p className="mb-6">We calculate and file estimated tax payments for freelancers, real estate investors, gig-workers, self-employed individuals and business owners making sure you're always ahead of deadlines.</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">Got a question?</h3>
                            <p className="cta-subtitle">Speak with a specialist or book a consultation.</p>
                            <div className="cta-actions">
                                <Link href="/payment/consultation" className="btn btn-primary">Schedule Consultation</Link>
                                <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="mb-6">Quarterly taxes can be confusing, especially when income fluctuates. Instead of guessing and risking penalties, we calculate precise payment amounts based on your income trends, business projections, and tax law changes.</p>
                            <p className="mb-6">We help you plan your cash flow through the year, avoid unwanted IRS letters, and stay ahead of deadlines. With us, estimated taxes become predictable and manageable, helping you feel prepared instead of stressed.</p>
                            <p className="mb-6">We calculate and file estimated tax payments for freelancers, real estate investors, gig-workers, self-employed individuals and business owners making sure you're always ahead of deadlines.</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>Quarterly Calculation</h3>
                                <p>Determine precise amounts using projections and safe‑harbor rules.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Cash‑Flow Planning</h3>
                                <p>Plan payments to minimize cash strain throughout the year.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Deadline Tracking</h3>
                                <p>Stay ahead of IRS dates and avoid penalties and surprises.</p>
                            </div>
                            <div className="service-card-small">
                                <h3>Remittance Scheduling</h3>
                                <p>Coordinate payment submissions and confirmations on time.</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">How It Works</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>Estimate</h4>
                                        <p>Analyze income trends and compute quarterly obligations.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>Schedule</h4>
                                        <p>Plan payments aligned to your cash‑flow cycles.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>Monitor</h4>
                                        <p>Review changes and adjust projections when needed.</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>Remit</h4>
                                        <p>Submit payments and confirm with documentation.</p>
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
