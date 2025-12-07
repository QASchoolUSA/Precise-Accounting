'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link href="/" className="logo" onClick={closeMenu}>Precise Accounting</Link>
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
                        <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
                        <li><Link href="/pricing" onClick={closeMenu}>Pricing</Link></li>
                        <li><Link href="/contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
