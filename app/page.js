import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title">Precise Accounting</h1>
                    <p className="hero-text">
                        Welcome to Precise Accounting, a place where numbers meet clarity and where the job is done with care, precision, and full transparency.
                    </p>
                    <p className="hero-text">
                        We take care of the numbers so you can focus on what matters most: your family and your business.
                    </p>
                    <div className="hero-actions">
                        <Link href="/pricing" className="btn btn-primary">Get a Price Estimate</Link>
                        <a href="#about" className="btn btn-secondary">About Us</a>
                    </div>
                </div>
            </section>

            <section className="section services-preview">
                <div className="container">
                    <h2 className="section-title text-center">Our Services</h2>
                    <div className="services-grid-home">
                        <div className="service-card-home" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Tax Preparation & Filing</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                <Link href="/services/personal-tax" className="btn btn-secondary-dark" style={{ fontSize: '0.85rem', padding: '0.5rem', width: '100%' }}>Personal</Link>
                                <Link href="/services/business-tax" className="btn btn-secondary-dark" style={{ fontSize: '0.85rem', padding: '0.5rem', width: '100%' }}>Business</Link>
                            </div>
                        </div>
                        <Link href="/services/estimated-tax" className="service-card-home">
                            <h3>Estimated Tax</h3>
                        </Link>
                        <Link href="/services/tax-optimization" className="service-card-home">
                            <h3>Tax Optimization & Planning</h3>
                        </Link>
                        <Link href="/services/books-reinstatement" className="service-card-home">
                            <h3>Books & Financial Records Reinstatement</h3>
                        </Link>
                        <Link href="/services/payroll" className="service-card-home">
                            <h3>Payroll Setup & Maintenance</h3>
                        </Link>
                        <Link href="/services/1099-filing" className="service-card-home">
                            <h3>1099 Preparation & Filing</h3>
                        </Link>
                        <Link href="/services/sales-tax" className="service-card-home">
                            <h3>Sales Tax</h3>
                        </Link>
                        <Link href="/services/new-business" className="service-card-home">
                            <h3>New Business Entity Formation</h3>
                        </Link>
                        {/* <div className="service-card-home disabled">
                            <h3>Resources (Coming Soon)</h3>
                        </div> */}
                    </div>
                    <div className="text-center" style={{ marginTop: '1rem' }}>
                        <Link href="/services" className="btn btn-secondary-dark">View All Services</Link>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center">Why Choose Us?</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" /></svg>
                            </div>
                            <h3>Accuracy</h3>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3>Integrity</h3>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
                            </div>
                            <h3>Results</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="section about-section">
                <div className="container">
                    <div className="about-intro">
                        <h2 className="section-title">About Us</h2>
                        <p>
                            At our firm precision meets personalized service. We believe that accounting should feel clear, supportive, and empowering - not overwhelming.
                        </p>
                        <p>
                            We take the time to understand your unique situation so we can provide accurate work, honest guidance, and tax strategies that are fully compliant and tailored to your goals.
                        </p>
                    </div>

                    <div className="owner-profile">
                        <h3 className="owner-title">Meet the Owner, Iana Korentsova</h3>
                        <div className="owner-content">
                            <p>
                                I bring over a decade of experience in finance and accounting, supported by a Master's degree in Mathematics and Statistics, giving me a strong analytical edge in everything I do.
                            </p>
                            <p>
                                My career began in Russia as a bank economist, analyzing businesses for lending and investment decisions, a role that shaped my analytical approach and attention to detail. After moving to the U.S., I continued my work as an accountant in the trucking industry, one of the most complex areas of small business finance. This blend of financial analysis and U.S. accounting experience allows me to offer a deeper, more comprehensive understanding of each client's financial situation.
                            </p>
                            <p>
                                I'm also an IRS <strong>Annual Filing Season Program (AFSP) credentialed tax professional</strong>, committed to continuous learning and staying fully up to date with the changing tax landscape. Every recommendation I make is rooted in legal, compliant, and ethical tax-reduction strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
