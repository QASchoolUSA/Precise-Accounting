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
                        <p className="mb-6">Restore clarity and confidence in your financials. We clean up and reinstate neglected or outdated books, ensuring full readiness for tax season, lender evaluations, or audit requirements.</p>
                        <p className="mb-6">Whether you've fallen behind due to rapid growth or simply need a fresh start, our reinstatement services ensure your business is always prepared, protected, and compliant.</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="/contact" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
