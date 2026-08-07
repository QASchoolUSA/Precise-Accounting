import { getDictionary } from '../../../../get-dictionary';
import ConsultationClient from './ConsultationClient';
import { buildPageMetadata } from '../../../../lib/metadata';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return buildPageMetadata({
        lang,
        path: '/payment/consultation/',
        title: dict.consultation.title,
        description: lang === 'en' ? 'Book a paid consultation with Precise Accounting.' : dict.consultation.bookTitle,
        index: false
    });
}

export default async function ConsultationPayment({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <ConsultationClient lang={lang} dict={dict.consultation} />;
}
