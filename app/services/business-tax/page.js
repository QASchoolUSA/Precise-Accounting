import Link from 'next/link';

export const metadata = {
    title: 'Business Tax Preparation | Precise Accounting',
    description: 'Hands-on, detail-driven business tax preparation for corporations, partnerships, and self-employed individuals.',
};

export default function BusinessTaxPage() {
    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Business Tax</h1>
                    <p className="page-subtitle">Expert support for your growing business</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', lineHeight: '1.7' }}>
                        We offer hands-on, detail-driven business tax preparation for corporations,
                        partnerships, and self-employed, giving you the support of a trusted professional.
                    </p>

                    <div style={{
                        backgroundColor: 'var(--color-bg-alt)',
                        padding: '3rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-brand)' }}>
                            Want to get your business taxes handled the right way?
                        </h2>

                        <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
