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
                        <p className="mb-6">We help you choose the right structure, file the required documents, and set up your business properly from day one.</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="/contact" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">The structure you choose on day one affects your taxes, liability, paperwork, and future business options. We guide you step-by-step: selecting the right entity type, filing required documents, registering properly with Florida and other states agencies, and completing IRS elections such as S-Corp status if needed.</p>
                            <p className="mb-6">With a strong foundation, you avoid costly restructuring later, and start your business with confidence, clarity, and tax efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
