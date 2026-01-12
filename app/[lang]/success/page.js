import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <div style={{
                fontSize: '4rem',
                color: 'var(--color-primary)', // Accessing theme variable if available
                marginBottom: '1rem'
            }}>
                ✓
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>Booking Successful!</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', marginBottom: '2rem' }}>
                Thank you for your business. We have received your payment and will be in touch shortly to confirm the details of your service.
            </p>
            <Link href="/" className="btn btn-primary" style={{
                display: 'inline-block',
                textDecoration: 'none',
                // Fallback styles if class isn't sufficient in isolation
                backgroundColor: '#0047AB',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontWeight: 'bold'
            }}>
                Return to Home
            </Link>
        </div>
    );
}
