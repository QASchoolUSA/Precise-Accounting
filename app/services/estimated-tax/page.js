import Link from 'next/link';

export const metadata = {
    title: 'Estimated Tax | Precise Accounting',
    description: 'Estimated Tax services for self-employed and business owners.',
};

export default function EstimatedTaxServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Estimated Tax</h1>
                    <p className="page-subtitle">Stay ahead of your tax obligations.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">The IRS requires self-employed taxpayers and business owners to pay taxes quarterly. Falling behind can result in penalties. We determine accurate quarterly amounts for you and guide you through the schedule, ensuring you stay compliant and avoid surprise bills.</p>

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
