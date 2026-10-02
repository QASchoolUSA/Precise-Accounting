import { buildPageMetadata } from '../../../lib/metadata';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    return buildPageMetadata({
        lang,
        path: '/success/',
        title: 'Booking Successful',
        description: 'Thank you for your payment to Precise Accounting.',
        index: false,
    });
}

export default async function SuccessPage({ params }) {
    const { lang } = await params;

    return (
        <div className="success-page">
            <div className="success-page__icon" aria-hidden="true">✓</div>
            <h1 className="success-page__title">Booking Successful!</h1>
            <p className="success-page__text">
                Thank you for your business. We have received your payment and will be in touch shortly to confirm the details of your service.
            </p>
            <Link href={`/${lang}/`} className="btn btn-primary">
                Return to Home
            </Link>
        </div>
    );
}
