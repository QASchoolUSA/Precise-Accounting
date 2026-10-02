'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ lang, dict }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleResources = () => {
        setIsResourcesOpen(!isResourcesOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link href={`/${lang}/`} className="logo desktop-logo" onClick={closeMenu}>
                    <span className="logo-text">Precise Accounting</span>
                </Link>
                <Link href={`/${lang}/`} className="logo mobile-logo-icon" onClick={closeMenu} style={{ display: 'none' }}>
                    <span className="logo-text">PA</span>
                </Link>
                <div className="mobile-header-actions" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
                    <LanguageSwitcher />
                    <Link href={`/${lang}/contact`} className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                        {dict.contact}
                    </Link>
                </div>
                <button
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                    style={{ display: 'none' }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                        <Link href={`/${lang}/`} className="logo" onClick={closeMenu}>
                            <span className="logo-text">Precise Accounting</span>
                        </Link>
                    </div>
                    <ul>
                        <li><Link href={`/${lang}/`} onClick={closeMenu}>{dict.home}</Link></li>
                        <li className={`dropdown ${isServicesOpen ? 'open' : ''}`}>
                            <span className="dropdown-trigger" onClick={toggleServices}>{dict.services} ▾</span>
                            <ul className="dropdown-menu">
                                <li><Link href={`/${lang}/services/personal-tax`} onClick={closeMenu}>{dict.personalTax}</Link></li>
                                <li><Link href={`/${lang}/services/business-tax`} onClick={closeMenu}>{dict.businessTax}</Link></li>
                                <li><Link href={`/${lang}/services/estimated-tax`} onClick={closeMenu}>{dict.estimatedTax}</Link></li>
                                <li><Link href={`/${lang}/services/tax-optimization`} onClick={closeMenu}>{dict.taxOptimization}</Link></li>
                                <li><Link href={`/${lang}/services/accounting-bookkeeping`} onClick={closeMenu}>{dict.accounting}</Link></li>
                                <li><Link href={`/${lang}/services/books-reinstatement`} onClick={closeMenu}>{dict.booksReinstatement}</Link></li>
                                <li><Link href={`/${lang}/services/payroll`} onClick={closeMenu}>{dict.payroll}</Link></li>
                                <li><Link href={`/${lang}/services/1099-filing`} onClick={closeMenu}>{dict.form1099}</Link></li>
                                <li><Link href={`/${lang}/services/sales-tax`} onClick={closeMenu}>{dict.salesTax}</Link></li>
                                <li><Link href={`/${lang}/services/new-business`} onClick={closeMenu}>{dict.newBusiness}</Link></li>
                            </ul>
                        </li>
                        <li><Link href={`/${lang}/pricing`} onClick={closeMenu}>{dict.pricing}</Link></li>
                        <li className={`dropdown ${isResourcesOpen ? 'open' : ''}`}>
                            <span className="dropdown-trigger" onClick={toggleResources}>{dict.resources} ▾</span>
                            <ul className="dropdown-menu">
                                <li><Link href={`/${lang}/resources/tax-news`} onClick={closeMenu}>{dict.taxNews}</Link></li>
                                <li><Link href={`/${lang}/resources/insights`} onClick={closeMenu}>{dict.insights}</Link></li>
                                <li><Link href={`/${lang}/resources/guides`} onClick={closeMenu}>{dict.guides}</Link></li>
                            </ul>
                        </li>
                        <li><LanguageSwitcher /></li>
                        <li><Link href={`/${lang}/contact`} className="btn btn-primary" onClick={closeMenu}>{dict.contact}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
