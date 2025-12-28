import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';

export const metadata = {
    title: 'Personal Tax Preparation | Precise Accounting',
    description: 'Accurate and compliant personal tax preparation services maximizing your refund and reducing your tax burden legally.',
};

export default async function PersonalTaxPage({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const t = dict.personalTaxPage;

    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">{t.title}</h1>
                    <p className="page-subtitle">{t.subtitle}</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-title">{t.motto}</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                            {t.preparedWith}
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            paddingLeft: '0',
                            display: 'grid',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {[
                                t.accuracy,
                                t.documentation,
                                t.goodFaith
                            ].map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: '500' }}>
                                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="cta mb-12">
                        <h3 className="cta-title">{t.ctaTitle}</h3>
                        <p className="cta-subtitle">{t.ctaSubtitle}</p>
                        <div className="cta-actions">
                            <Link href={`/${lang}/pricing`} className="btn btn-primary">{dict.home.getEstimate}</Link>
                            <Link href={`/${lang}/payment/consultation`} className="btn btn-secondary-dark">{dict.servicesPage.scheduleConsultation}</Link>
                        </div>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                            {t.estimateDisclaimer}
                        </p>
                    </div>

                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        {t.goalText}
                    </p>

                    <div className="security-note" style={{ marginBottom: '3rem' }}>
                        {t.ethicsText}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.longText1}
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.longText2}
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.longText3}
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.longText4}
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.longText5}
                        </p>
                    </div>


                </div>
            </section>
        </>
    );
}
