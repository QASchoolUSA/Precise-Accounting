import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title">Accuracy. Integrity. Results.</h1>
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
                        <h3 className="owner-title">Meet the Owner, Lana Korentsova</h3>
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
