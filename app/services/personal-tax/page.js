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

                    <div style={{
                        backgroundColor: 'var(--color-bg-alt)',
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-brand)' }}>
                            Ready to file with confidence?
                        </h3>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/pricing" className="btn btn-primary">
                                Get a Price Estimate
                            </Link>
                            <Link href="/contact" className="btn btn-secondary-dark">
                                Schedule a Consultation
                            </Link>
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
