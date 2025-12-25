

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
                    Precise Accounting
                </span>
                <p>&copy; 2024 Precise Accounting. All rights reserved.</p>
            </div>
        </footer>
    );
}
