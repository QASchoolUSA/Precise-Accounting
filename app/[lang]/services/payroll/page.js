import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';
import { buildPageMetadata } from '../../../../lib/metadata';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/services/payroll/',
        title: dict.payrollPage.title,
        description: dict.payrollPage.subtitle
    });
}

export default async function PayrollService({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.payrollPage;

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
                        <p className="mb-6">{t.intro}</p>

                        <div className="service-card mb-6">
                            <h3>{t.setupTitle}</h3>
                            <p>{t.setupDesc}</p>
                        </div>

                        <div className="service-card mb-6">
                            <h3>{t.monthlyTitle}</h3>
                            <p>{t.monthlyDesc}</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text)' }}>
                                {t.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-4">{t.closure}</p>
                        </div>

                        <div className="service-actions mt-8 text-center">
                            <Link href={`/${lang}/payment/consultation`} className="btn btn-primary mr-4">{dict.servicesPage.scheduleConsultation}</Link>
                            <Link href={`/${lang}/contact`} className="btn btn-secondary-dark">{dict.contactPage.title}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
