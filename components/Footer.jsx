import LanguageSwitcher from './LanguageSwitcher';
import { siteConfig } from '../lib/site';

export default function Footer({ lang, dict }) {
    const address = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand-block">
                    <span className="footer__brand">Precise Accounting</span>
                    <p className="footer__nap">{address}</p>
                    <p className="footer__nap">
                        <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
                    </p>
                </div>
                <LanguageSwitcher />
                <div className="footer__meta">
                    <p>{dict.rights}</p>
                </div>
            </div>
        </footer>
    );
}
