import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';

export const metadata = {
    title: 'Accounting & Bookkeeping | Precise Accounting',
    description: 'Professional bookkeeping and financial reporting at a predictable monthly cost.',
};

export default async function AccountingBookkeepingServices({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const t = dict.accountingBookkeepingPage;

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">{t.title}</h1>
                    <p className="page-subtitle">{t.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">{t.text1}</p>
                        <p className="mb-6">{t.text2}</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">{dict.servicesPage.taxOptTitle}</h3>
                            <p className="cta-subtitle">{dict.servicesPage.subtitle}</p>
                            <div className="cta-actions">
                                <Link href={`/${lang}/pricing?tab=bookkeeping`} className="btn btn-primary">{lang === 'ru' ? 'Рассчитать стоимость' : 'Get Free Estimate'}</Link>
                                <Link href={`/${lang}/contact`} className="btn btn-secondary-dark">{dict.contactPage.title}</Link>
                            </div>
                        </div>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic', textAlign: 'center' }}>
                            {t.estimateDisclaimer}
                        </p>

                        <div className="mt-8">
                            <p className="mb-6">{t.text3}</p>
                            <p className="mb-6">{t.text4}</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>{t.cards.cat}</h3>
                                <p>{t.cards.catDesc}</p>
                            </div>
                            <div className="service-card-small">
                                <h3>{t.cards.recon}</h3>
                                <p>{t.cards.reconDesc}</p>
                            </div>
                            <div className="service-card-small">
                                <h3>{t.cards.reports}</h3>
                                <p>{t.cards.reportsDesc}</p>
                            </div>
                            <div className="service-card-small">
                                <h3>{t.cards.reviews}</h3>
                                <p>{t.cards.reviewsDesc}</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">{t.hiw.title}</h3>
                        <div className="hiw">
                            <div className="service-grid">
                                <div className="service-card-small step-card">
                                    <span className="step-icon">1</span>
                                    <div>
                                        <h4>{t.hiw.step1}</h4>
                                        <p>{t.hiw.step1Desc}</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">2</span>
                                    <div>
                                        <h4>{t.hiw.step2}</h4>
                                        <p>{t.hiw.step2Desc}</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">3</span>
                                    <div>
                                        <h4>{t.hiw.step3}</h4>
                                        <p>{t.hiw.step3Desc}</p>
                                    </div>
                                </div>
                                <div className="service-card-small step-card">
                                    <span className="step-icon">4</span>
                                    <div>
                                        <h4>{t.hiw.step4}</h4>
                                        <p>{t.hiw.step4Desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
