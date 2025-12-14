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
                        <p className="mb-6">Restore clarity and confidence in your financials. We clean up and reinstate neglected or outdated books, ensuring full readiness for tax season, lender evaluations, or audit requirements, so your business is always prepared and protected.</p>
                        <p className="mb-6">Ready to get your financial records back on track?</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="https://cal.com/precise-accounting" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">Falling behind on books happens, especially when a business is growing fast. But inaccurate financials can lead to IRS issues, cash-flow problems, denied funding, and costly tax amendments.</p>
                            <p className="mb-6">We step in and restore full accuracy: missing records re-created, errors corrected, accounts aligned, and everything prepared to meet tax or audit standards. You’ll walk away with clean, organized books and a renewed sense of control over your business.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
