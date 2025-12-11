import Link from 'next/link';

export const metadata = {
    title: 'New Business Entity Formation | Precise Accounting',
    description: 'Expert guidance for setting up your new business entity.',
};

export default function NewBusinessServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">New Business Entity Formation</h1>
                    <p className="page-subtitle">Start your business on the right foundation.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">Starting a new business requires making important decisions early on. We help you choose the right structure (LLC, S-Corp, C-Corp, etc.), file the required documents, and set up your business properly to ensure tax efficiency and legal protection from day one.</p>

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
