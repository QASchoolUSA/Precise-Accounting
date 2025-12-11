import Link from 'next/link';

export const metadata = {
    title: 'Contact | Precise Accounting',
    description: 'Contact Precise Accounting related queries.',
};

export default function Contact() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">We're here to help.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-methods">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p className="mb-4">We're text- and messenger-friendly!</p>

                            <div className="contact-item">
                                <strong>Email:</strong>
                                <a href="mailto:contact@proaccountingusa.com">contact@proaccountingusa.com</a>
                            </div>
                            <div className="contact-item">
                                <strong>Call or Text:</strong>
                                <a href="tel:+14079667778">+1(407) 966-7778</a>
                            </div>
                            <div className="contact-item">
                                <strong>WhatsApp:</strong>
                                <a href="https://wa.me/message/QAOEHLU4XRVHL1" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
                            </div>

                            <div className="social-links mt-6">
                                <h3>Follow us:</h3>
                                <ul>
                                    <li><a href="https://www.instagram.com/precisetaxes" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                    <li><a href="https://t.me/precisetaxes" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                                    <li><a href="https://facebook.com/groups/1395083481908820/" target="_blank" rel="noopener noreferrer">Facebook Group</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="consultation-box">
                            <h2>Book a Consultation</h2>
                            <div className="pricing-card">
                                <h3>30 Minutes</h3>
                                <p className="price">$150</p>
                                <Link href="/payment/consultation" className="btn btn-primary btn-full">Book Now</Link>
                            </div>
                            <div className="pricing-card mt-4">
                                <h3>60 Minutes</h3>
                                <p className="price">$250</p>
                                <Link href="/payment/consultation" className="btn btn-primary btn-full">Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="security-note">
                        <p><em>For your security, please do not send sensitive documents or personal information (such as SSNs, IDs, tax forms, or financial records) through email or messenger apps. All sensitive files should only be uploaded through our secure client portal.</em></p>
                    </div>
                </div>
            </section>
        </>
    );
}
