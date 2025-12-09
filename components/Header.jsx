'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
                <Link href="/" className="logo" onClick={closeMenu}>
                    <Image
                        src="/PreciseAccountingUSA-Logo.svg"
                        alt="Precise Accounting USA"
                        width={200}
                        height={50}
                        style={{ height: '50px', width: 'auto' }}
                        priority
                    />
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
                        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                        <li className={`dropdown ${isServicesOpen ? 'open' : ''}`}>
                            <span className="dropdown-trigger" onClick={toggleServices}>Services ▾</span>
                            <ul className="dropdown-menu">
                                <li><Link href="/services/personal-tax" onClick={closeMenu}>Personal Tax Preparation</Link></li>
                                <li><Link href="/services/business-tax" onClick={closeMenu}>Business Tax Preparation</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing" onClick={closeMenu}>Pricing</Link></li>
                        <li><Link href="/contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
