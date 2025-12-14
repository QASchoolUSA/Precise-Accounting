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
                        <p className="mb-6">Quarterly taxes can be confusing, especially when income fluctuates. Instead of guessing and risking penalties, we calculate precise payment amounts based on your income trends, business projections, and tax law changes.</p>
                        <p className="mb-6">We help you plan your cash flow through the year, avoid unwanted IRS letters, and stay ahead of deadlines. With us, estimated taxes become predictable and manageable, helping you feel prepared instead of stressed.</p>
                        <p className="mb-6">We calculate and file estimated tax payments for freelancers, real estate investors, gig-workers, self-employed individuals and business owners making sure you're always ahead of deadlines.</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="https://cal.com/precise-accounting" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>

                        <div className="mt-8">
                            <p className="mb-6">Quarterly taxes can be confusing, especially when income fluctuates. Instead of guessing and risking penalties, we calculate precise payment amounts based on your income trends, business projections, and tax law changes.</p>
                            <p className="mb-6">We help you plan your cash flow through the year, avoid unwanted IRS letters, and stay ahead of deadlines. With us, estimated taxes become predictable and manageable, helping you feel prepared instead of stressed.</p>
                            <p className="mb-6">We calculate and file estimated tax payments for freelancers, real estate investors, gig-workers, self-employed individuals and business owners making sure you're always ahead of deadlines.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
