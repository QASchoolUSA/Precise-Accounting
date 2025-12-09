import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <Image
                    src="/PreciseAccountingUSA-Logo.svg"
                    alt="Precise Accounting USA"
                    width={150}
                    height={40}
                    style={{ height: '40px', width: 'auto', opacity: 0.9 }}
                />
                <p>&copy; 2024 Precise Accounting. All rights reserved.</p>
            </div>
        </footer>
    );
}
