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
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                        We offer hands-on, detail-driven business tax preparation for corporations,
                        partnerships, and self-employed, giving you the support of a trusted professional.
                    </p>
                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1.25rem' }}>
                            We provide corporate and partnership tax preparation for LLCs, S-Corps, C-Corps, and sole proprietors across Florida and other states. From trucking companies, Amazon and other e-commerce sellers to service-based businesses, we ensure full compliance with IRS and state requirements while optimizing your tax outcome.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            Growing a business requires strong financial decisions, and taxes are one of the most impactful. We go far beyond simply filing a return. We analyze your bookkeeping, entity structure, deduction opportunities, prior-year filings, compliance requirements, and industry-specific rules to ensure your company keeps more of its hard-earned money.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            From S-Corps and C-Corps to partnerships and single-member LLCs, we help Florida business owners legally reduce tax liability and stay fully aligned with federal and state regulations. You’ll always know what to expect, what to prepare for, and how your taxes impact your future growth.
                        </p>
                    </div>

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

                        <Link href="https://cal.com/precise-accounting" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
