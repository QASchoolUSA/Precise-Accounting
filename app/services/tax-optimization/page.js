import Link from 'next/link';

export const metadata = {
    title: 'Tax Optimization & Planning | Precise Accounting',
    description: 'Proactive tax optimization and planning strategies.',
};

export default function TaxOptimizationServices() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Tax Optimization & Planning</h1>
                    <p className="page-subtitle">Proactive strategies to legally minimize your tax liability.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">When tax season arrives, there are usually only a few limited things we can still do to legally reduce your tax liability. Effective tax strategy is built on proactive planning, not last-minute fixes. That applies to both personal and business taxes.</p>
                        <p className="mb-6">We work with you throughout the year to identify deductions, credits, and strategies that fit your specific financial situation. Take action now, while the options are open and the impact is meaningful.</p>

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
