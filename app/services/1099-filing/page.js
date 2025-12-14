import Link from 'next/link';

export const metadata = {
    title: '1099 Preparation & Filing | Precise Accounting',
    description: 'Fast and accurate 1099 preparation and filing services.',
};

export default function Form1099Services() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">1099 Preparation & Filing</h1>
                    <p className="page-subtitle">Compliance made simple for your contractors.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">We provide fast, accurate 1099 filing for your contractors, including preparation, IRS submission, and recipient copies. Ensure you meet all deadlines and avoid potential penalties with our streamlined service.</p>
                        <p className="mb-6">Even a single missing or incorrect contractor form can lead to IRS notices and penalties. We review payments, verify contractor details, prepare all required forms, and file electronically with the IRS ensuring full compliance and timely delivery.</p>
                        <p className="mb-6">Perfect for business owners who want to eliminate paperwork stress and protect their business from avoidable fines.</p>

                        <div className="service-actions mt-8 text-center">
                            <Link href="https://cal.com/precise-accounting" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
