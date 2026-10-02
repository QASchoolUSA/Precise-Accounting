import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';
import { buildPageMetadata, buildServicePageSchemas } from '../../../../lib/metadata';
import JsonLd from '../../../../components/JsonLd';
import PageHero from '../../../../components/design/PageHero';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/services/personal-tax/',
        title: dict.personalTaxPage.title,
        description: dict.personalTaxPage.subtitle
    });
}

export default async function PersonalTaxPage({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.personalTaxPage;

    const schemas = buildServicePageSchemas({
        lang,
        path: '/services/personal-tax/',
        name: t.title,
        description: t.subtitle,
        homeLabel: dict.navigation.home,
        servicesLabel: dict.navigation.services,
    });

    return (
        <>
            <JsonLd data={schemas} />
            <PageHero title={t.title} subtitle={t.subtitle} />

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
