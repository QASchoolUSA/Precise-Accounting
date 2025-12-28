import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';

export const metadata = {
    title: 'Tax Optimization & Planning | Precise Accounting',
    description: 'Proactive tax optimization and planning strategies.',
};

export default async function TaxOptimizationServices({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const t = dict.taxOptimizationPage;

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
                        <p className="mb-6">{t.text3}</p>
                        <p className="mb-6">{t.text4}</p>

                        <div className="cta mt-8">
                            <h3 className="cta-title">{dict.businessTaxPage.ctaTitle}</h3>
                            <p className="cta-subtitle">{dict.businessTaxPage.ctaSubtitle}</p>
                            <div className="cta-actions">
                                <Link href={`/${lang}/payment/consultation`} className="btn btn-primary">{dict.servicesPage.scheduleConsultation}</Link>
                                <Link href={`/${lang}/contact`} className="btn btn-secondary-dark">{dict.contactPage.title}</Link>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="mb-6">{t.text3}</p>
                            <p className="mb-6">{t.text3}</p>
                            <p className="mb-6">{t.text4}</p>
                        </div>

                        <div className="service-grid mt-8">
                            <div className="service-card-small">
                                <h3>{t.cards.planning}</h3>
                                <p>{t.cards.planningDesc}</p>
                            </div>
                            <div className="service-card-small">
                                <h3>{t.cards.entity}</h3>
                                <p>{t.cards.entityDesc}</p>
                            </div>
                            <div className="service-card-small">
                                <h3>{t.cards.retirement}</h3>
                                <p>{t.cards.retirementDesc}</p>
                            </div>
                            <div className="service-card-small">
                                <h3>{t.cards.credits}</h3>
                                <p>{t.cards.creditsDesc}</p>
                            </div>
                        </div>

                        <h3 className="section-title mt-8">{dict.accountingBookkeepingPage.hiw.title}</h3>
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
