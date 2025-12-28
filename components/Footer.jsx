

export default function Footer({ lang, dict }) {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
                    Precise Accounting
                </span>
                <p>{dict.rights}</p>
            </div>
        </footer>
    );
}
