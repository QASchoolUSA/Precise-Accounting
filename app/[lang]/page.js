import Link from 'next/link';
import { getDictionary } from '../../get-dictionary';

export default async function Home({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const t = dict.home;

    return (
        <>
            <section id="home" className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title">{t.heroTitle}</h1>
                    <p className="hero-text">
                        {t.heroText1}
                    </p>
                    <p className="hero-text">
                        {t.heroText2}
                    </p>
                    <div className="hero-actions">
                        <Link href={`/${lang}/pricing`} className="btn btn-primary">{t.getEstimate}</Link>
                        <a href="#about" className="btn btn-secondary">{t.aboutUs}</a>
                    </div>
                </div>
            </section>

            <section className="section services-preview">
                <div className="container">
                    <h2 className="section-title text-center">{t.ourServices}</h2>
                    <div className="services-grid-home">
                        {/* Card 1: Tax Prep (Always visible as it's the core service) */}
                        <div className="service-card-home" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{t.services.taxPrep}</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                <Link href={`/${lang}/services/personal-tax`} className="btn btn-secondary-dark" style={{ fontSize: '0.85rem', padding: '0.5rem', width: '100%' }}>{t.services.personal}</Link>
                                <Link href={`/${lang}/services/business-tax`} className="btn btn-secondary-dark" style={{ fontSize: '0.85rem', padding: '0.5rem', width: '100%' }}>{t.services.business}</Link>
                            </div>
                        </div>

                        {/* Fixed order of remaining services */}
                        {[
                            { href: `/${lang}/services/tax-optimization`, label: dict.navigation.taxOptimization },
                            { href: `/${lang}/services/accounting-bookkeeping`, label: dict.navigation.accounting },
                            { href: `/${lang}/services/estimated-tax`, label: dict.navigation.estimatedTax },
                            { href: `/${lang}/services/books-reinstatement`, label: dict.navigation.booksReinstatement },
                            { href: `/${lang}/services/payroll`, label: dict.navigation.payroll },
                            { href: `/${lang}/services/1099-filing`, label: dict.navigation.form1099 },
                            { href: `/${lang}/services/sales-tax`, label: dict.navigation.salesTax },
                            { href: `/${lang}/services/new-business`, label: dict.navigation.newBusiness }
                        ].map((service, index) => (
                            <Link key={index} href={service.href} className="service-card-home">
                                <h3>{service.label}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '1rem' }}>
                        <Link href={`/${lang}/services`} className="btn btn-secondary-dark">{t.viewAllServices}</Link>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center">{t.whyChooseUs}</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" /></svg>
                            </div>
                            <h3>{t.accuracy}</h3>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3>{t.integrity}</h3>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
                            </div>
                            <h3>{t.results}</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="section about-section">
                <div className="container">
                    <div className="about-intro">
                        <h2 className="section-title">{t.aboutUs}</h2>
                        <p>
                            {t.aboutText1}
                        </p>
                        <p>
                            {t.aboutText2}
                        </p>
                        <p>
                            {t.aboutText3}
                        </p>
                    </div>

                    <div className="owner-profile">
                        <h3 className="owner-title">{t.meetOwner}</h3>
                        <div className="owner-content">
                            <p>
                                {t.ownerBio1}
                            </p>
                            <p>
                                {t.ownerBio2}
                            </p>
                            <p dangerouslySetInnerHTML={{ __html: t.ownerBio3 }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
