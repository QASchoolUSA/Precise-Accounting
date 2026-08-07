import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';
import { buildPageMetadata } from '../../../../lib/metadata';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/services/business-tax/',
        title: dict.businessTaxPage.title,
        description: dict.businessTaxPage.subtitle
    });
}

export default async function BusinessTaxPage({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.businessTaxPage;

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
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                        {t.intro}
                    </p>
                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.text1}
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.text2}
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            {t.text3}
                        </p>
                    </div>

                    <div className="cta mt-8">
                        <h3 className="cta-title">{t.ctaTitle}</h3>
                        <p className="cta-subtitle">{t.ctaSubtitle}</p>
                        <div className="cta-actions">
                            <Link href={`/${lang}/payment/consultation`} className="btn btn-primary">{dict.servicesPage.scheduleConsultation}</Link>
                            <Link href={`/${lang}/contact`} className="btn btn-secondary-dark">{t.contactBtn}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
