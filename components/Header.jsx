'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';


export default function Header({ lang, dict }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
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
        document.body.classList.remove('no-scroll');
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link href={`/${lang}/`} className="logo" onClick={closeMenu}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
                        Precise Accounting
                    </span>
                </Link>
                <button
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
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
                        <li><LanguageSwitcher /></li>
                        <li><Link href={`/${lang}/contact`} className="btn btn-primary" onClick={closeMenu}>{dict.contact}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
