import Link from 'next/link';
import { getDictionary } from '../../../get-dictionary';

export const metadata = {
    title: 'Services | Precise Accounting',
    description: 'Precise Accounting Services: Tax Preparation, Bookkeeping, Payroll, and Financial Planning.',
};

export default async function Services({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const t = dict.servicesPage;

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
                    <h2 className="section-title">{t.taxPrepTitle}</h2>

                    <div className="service-card">
                        <h3>{t.personalTaxTitle}</h3>
                        <p>{t.personalTaxDesc1}</p>
                        <p>{t.personalTaxDesc2}</p>
                        <p>{t.personalTaxDesc3}</p>
                        <div className="service-actions">
                            <Link href={`/${lang}/pricing`} className="btn btn-primary">{dict.home.getEstimate}</Link>
                            <Link href={`/${lang}/payment/consultation`} className="btn btn-secondary-dark">{t.scheduleConsultation}</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>{t.businessTaxTitle}</h3>
                        <p>{t.businessTaxDesc}</p>
                        <div className="service-actions">
                            <Link href={`/${lang}/payment/consultation`} className="btn btn-secondary-dark">{t.scheduleConsultation}</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>{t.booksReinstatementTitle}</h3>
                        <p>{t.booksReinstatementDesc}</p>
                        <div className="service-actions">
                            <Link href={`/${lang}/services/books-reinstatement`} className="btn btn-secondary-dark">{t.learnMore}</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <h3>{t.estimatedTaxTitle}</h3>
                        <p>{t.estimatedTaxDesc}</p>
                        <div className="service-actions">
                            <Link href={`/${lang}/services/estimated-tax`} className="btn btn-secondary-dark">{t.learnMore}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">{t.taxOptTitle}</h2>
                    <p>{t.taxOptDesc}</p>
                    <div className="service-actions mt-4">
                        <Link href={`/${lang}/services/tax-optimization`} className="btn btn-secondary-dark">{t.taxOptBtn}</Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{t.accountingTitle}</h2>
                    <p>{t.accountingDesc1}</p>
                    <p style={{ marginTop: '1rem' }}>{t.accountingDesc2}</p>
                    <p>{t.accountingDesc3}</p>
                    <div className="service-actions mt-4">
                        <Link href={`/${lang}/pricing`} className="btn btn-primary">{dict.home.getEstimate}</Link>
                        <Link href={`https://cal.com/precise-accounting?lang=${lang}`} className="btn btn-secondary-dark" target="_blank">{t.scheduleConsultation}</Link>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">{t.payrollTitle}</h2>

                    <div className="service-grid">
                        <div className="service-card-small">
                            <h3>{t.payrollSetupTitle}</h3>
                            <p>{t.payrollSetupDesc}</p>
                            <Link href={`/${lang}/services/payroll`} className="text-link">{dict.home.getEstimate} →</Link>
                        </div>

                        <div className="service-card-small">
                            <h3>{t.form1099Title}</h3>
                            <p>{t.form1099Desc}</p>
                            <Link href={`/${lang}/services/1099-filing`} className="text-link">{t.learnMore} →</Link>
                        </div>

                        <div className="service-card-small">
                            <h3>{t.salesTaxTitle}</h3>
                            <p>{t.salesTaxDesc}</p>
                            <Link href={`/${lang}/services/sales-tax`} className="text-link">{t.learnMore} →</Link>
                        </div>

                        <div className="service-card-small">
                            <h3>{t.newBusinessTitle}</h3>
                            <p>{t.newBusinessDesc}</p>
                            <Link href={`/${lang}/services/new-business`} className="text-link">{t.learnMore} →</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
