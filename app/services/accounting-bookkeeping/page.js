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

                        <div className="service-actions mt-8 text-center">
                            <Link href="https://cal.com/precise-accounting" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic', textAlign: 'center' }}>
                            *Before you begin: the quote shown will be an estimated amount, not a final price. We’ll confirm the exact fee after a detailed review of your documents, your situation and complexity.
                        </p>

                        <div className="mt-8">
                            <p className="mb-6">Accurate books are the foundation of any successful business. When your financials are current and organized, you can confidently make decisions, apply for loans, plan for taxes, and measure profitability.</p>
                            <p className="mb-6">We manage your books with the same level of detail and care as if they were our own. Every transaction is categorized correctly, every account reconciled, and every report delivered on schedule—giving you full visibility into your business performance without the burden of doing it yourself.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
