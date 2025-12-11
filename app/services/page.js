import Link from 'next/link';

export const metadata = {
    title: 'Services | Precise Accounting',
    description: 'Precise Accounting Services: Tax Preparation, Bookkeeping, Payroll, and Financial Planning.',
};

export default function Services() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">Comprehensive financial solutions tailored to your needs.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Tax Preparation & Filing</h2>

                    <div className="service-card">
                        <h3>Personal Tax Preparation</h3>
                        <p>Every tax return is prepared with accuracy, thorough documentation, and good-faith interpretation of tax law.</p>
                        <p>Our goal is to help you stay fully compliant while uncovering every opportunity to maximize your refund or reduce your tax burden legally. You'll always know exactly where you stand, and you'll never feel alone in the process.</p>
                        <p>At Precise Accounting, we follow the highest standards of professional ethics, confidentiality, and compliance required by the IRS, and U.S. Treasury Department. Your information is safe. Your rights are protected.</p>
                        <div className="service-actions">
                            <Link href="/pricing" className="btn btn-primary">Get a Price Estimate</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Schedule a Consultation</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>Business Tax</h3>
                        <p>We offer hands-on, detail-driven business tax preparation for corporations, partnerships, and self-employed, giving you the support of a trusted professional.</p>
                        <div className="service-actions">
                            <Link href="/contact" className="btn btn-secondary-dark">Schedule a Consultation</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>Books & Financial Records Reinstatement</h3>
                        <p>Restore clarity and confidence in your financials. We clean up and reinstate neglected or outdated books, ensuring full readiness for tax season, lender evaluations, or audit requirements, so your business is always prepared and protected.</p>
                        <div className="service-actions">
                            <Link href="/services/books-reinstatement" className="btn btn-secondary-dark">Learn More</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>Estimated Tax</h3>
                        <p>The IRS requires self-employed taxpayers and business owners to pay taxes quarterly. Falling behind can result in penalties. We determine accurate quarterly amounts for you and guide you through the schedule.</p>
                        <div className="service-actions">
                            <Link href="/services/estimated-tax" className="btn btn-secondary-dark">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Tax Optimization & Financial Planning</h2>
                    <p>When tax season arrives, there are usually only a few limited things we can still do to legally reduce your tax liability. Effective tax strategy is built on proactive planning, not last-minute fixes. That applies to both personal and business taxes. Take action now, while the options are open and the impact is meaningful.</p>
                    <div className="service-actions mt-4">
                        <Link href="/services/tax-optimization" className="btn btn-secondary-dark">Let's build a proactive strategy</Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Accounting & Bookkeeping</h2>
                    <p>Professional bookkeeping and financial reporting, delivered at a predictable and simple monthly cost so you don't need to hire a full-time employee.</p>
                    <div className="service-actions mt-4">
                        <Link href="/pricing" className="btn btn-primary">Get a Price Estimate</Link>
                        <Link href="/contact" className="btn btn-secondary-dark">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Payroll & 1099</h2>

                    <div className="service-grid">
                        <div className="service-card-small">
                            <h3>Payroll Setup & Maintenance</h3>
                            <p>We take care of the entire process for you, from setup to ongoing maintenance, making sure everything is accurate, compliant, and reported correctly. Pricing varies based on employees, frequency, multi-state needs, benefits, and compliance requirements.</p>
                            <Link href="/services/payroll" className="text-link">Get a Price Estimate →</Link>
                        </div>

                        <div className="service-card-small">
                            <h3>1099 Preparation & Filing</h3>
                            <p>Fast, accurate 1099 filing for your contractors, including preparation, IRS submission, and recipient copies.</p>
                            <Link href="/services/1099-filing" className="text-link">Learn More →</Link>
                        </div>

                        <div className="service-card-small">
                            <h3>Sales Tax</h3>
                            <p>Accurate multi-state sales tax calculation, filing, and compliance.</p>
                            <Link href="/services/sales-tax" className="text-link">Learn More →</Link>
                        </div>

                        <div className="service-card-small">
                            <h3>New Business Entity Formation</h3>
                            <p>We help you choose the right structure, file the required documents, and set up your business properly.</p>
                            <Link href="/services/new-business" className="text-link">Learn More →</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
