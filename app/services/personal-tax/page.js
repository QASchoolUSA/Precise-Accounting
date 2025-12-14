import Link from 'next/link';

export const metadata = {
    title: 'Personal Tax Preparation | Precise Accounting',
    description: 'Accurate and compliant personal tax preparation services maximizing your refund and reducing your tax burden legally.',
};

export default function PersonalTaxPage() {
    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Personal Tax Preparation</h1>
                    <p className="page-subtitle">File with confidence and clarity</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-title">Accuracy. Integrity. Results.</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                            Every tax return is prepared with:
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            paddingLeft: '0',
                            display: 'grid',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {[
                                'Accuracy',
                                'Thorough documentation',
                                'Good-faith interpretation of tax law'
                            ].map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: '500' }}>
                                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        Our goal is to help you stay fully compliant while uncovering every opportunity
                        to maximize your refund or reduce your tax burden legally. You'll always know
                        exactly where you stand, and you'll never feel alone in the process.
                    </p>

                    <div className="security-note" style={{ marginBottom: '3rem' }}>
                        At Precise Accounting, we follow the highest standards of professional ethics,
                        confidentiality, and compliance required by the IRS, and U.S. Treasury Department.
                        Your information is safe. Your rights are protected.
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1.25rem' }}>
                            Your life isn’t one-size-fits-all – and your tax return shouldn’t be either. We take time to understand the full picture of your income, deductions, credits, and personal circumstances so nothing gets overlooked. Whether you're a W-2 employee, self-employed, a homeowner, a freelancer, a non-resident, or have investment and rental income – we tailor your return to ensure every lawful benefit is used to your advantage.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            Many taxpayers accidentally overpay or expose themselves to risk by filing alone. We protect you from IRS issues and help you avoid missing out on valuable tax savings you are entitled to. With Precise Accounting by your side, you gain clarity, confidence, and peace of mind – every step of the way.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            We also specialize in working with immigrants from post-USSR countries — including Russia, Ukraine, Belarus, Kazakhstan, Uzbekistan, and others. We understand the unique tax situations involving foreign income, ITIN, visa status, U.S. tax residency rules, and new-to-the-system taxpayers. We provide explanations in simple language and help navigate the U.S. tax system with confidence.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            We proudly serve clients locally in Central Florida including Orlando, Kissimmee, Lake Nona, Winter Garden, Windermere, Altamonte Springs, Sanford — and remotely across Florida and other states. With secure digital tools, expert support is always within reach, no matter where you live or move.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            Whether you need help with IRS notices, education credits, child tax benefits, rental property reporting, gig-work, or international tax considerations, we make the process smooth, organized, and stress-free.
                        </p>
                    </div>

                    <div className="cta mt-8">
                        <h3 className="cta-title">Ready to file with confidence?</h3>
                        <p className="cta-subtitle">Get an estimate or speak with a specialist.</p>
                        <div className="cta-actions">
                            <Link href="/pricing" className="btn btn-primary">Get a Price Estimate</Link>
                            <Link href="https://cal.com/precise-accounting" className="btn btn-secondary-dark">Schedule a Consultation</Link>
                        </div>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                            *Before you begin: the quote shown will be an estimated amount, not a final price.
                            We'll confirm the exact fee after a detailed review of your documents, your situation and complexity.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
