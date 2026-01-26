import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { MailIcon, PhoneIcon, WhatsAppIcon, InstagramIcon, TelegramIcon, FacebookIcon, MapPinIcon } from '@/components/SocialIcons';
import { getDictionary } from '../../../get-dictionary';

export const metadata = {
    title: 'Contact | Precise Accounting',
    description: 'Contact Precise Accounting related queries.',
};

export default async function Contact({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const t = dict.contactPage;

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">{t.title}</h1>
                    <p className="page-subtitle">{t.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-methods">
                        <div className="contact-info">
                            <ContactForm />

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h2>{t.otherWays}</h2>
                                <p className="mb-4">{t.friendly}</p>

                                <div className="social-grid">
                                    <div className="social-btn" style={{ height: 'auto', alignItems: 'flex-start' }}>
                                        <MapPinIcon className="flex-shrink-0 mt-1" />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: '600' }}>{t.addressTitle}</span>
                                            <span style={{ whiteSpace: 'pre-line' }}>{t.address}</span>
                                        </div>
                                    </div>
                                    <a href="mailto:contact@proaccountingusa.com" className="social-btn">
                                        <MailIcon />
                                        <span>{t.email}</span>
                                    </a>
                                    <a href="tel:+14079667778" className="social-btn">
                                        <PhoneIcon />
                                        <span>{t.callText}</span>
                                    </a>
                                    <a href="https://wa.me/message/QAOEHLU4XRVHL1" target="_blank" rel="noopener noreferrer" className="social-btn">
                                        <WhatsAppIcon />
                                        <span>{t.whatsapp}</span>
                                    </a>
                                </div>

                                <div className="social-links mt-6">
                                    <h3>{t.followUs}</h3>
                                    <div className="social-grid">
                                        <a href="https://www.instagram.com/precisetaxes" target="_blank" rel="noopener noreferrer" className="social-btn">
                                            <InstagramIcon />
                                            <span>Instagram</span>
                                        </a>
                                        <a href="https://t.me/precisetaxes" target="_blank" rel="noopener noreferrer" className="social-btn">
                                            <TelegramIcon />
                                            <span>Telegram</span>
                                        </a>
                                        <a href="https://facebook.com/groups/1395083481908820/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                            <FacebookIcon />
                                            <span>Facebook Group</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="consultation-box">
                            <h2>{t.bookTitle}</h2>
                            <div className="pricing-card">
                                <h3>{t.min30}</h3>
                                <p className="price">$150</p>
                                <Link href={`/${lang}/payment/consultation?amount=150&desc=30+Minute+Consultation`} className="btn btn-primary btn-full">{t.bookNow}</Link>
                            </div>
                            <div className="pricing-card mt-4">
                                <h3>{t.min60}</h3>
                                <p className="price">$250</p>
                                <Link href={`/${lang}/payment/consultation?amount=250&desc=60+Minute+Consultation`} className="btn btn-primary btn-full">{t.bookNow}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="security-note">
                        <p><em>{t.securityNote}</em></p>
                    </div>
                </div>
            </section>
        </>
    );
}
