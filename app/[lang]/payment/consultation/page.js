import { getDictionary } from '../../../../get-dictionary';
import ConsultationClient from './ConsultationClient';

export const metadata = {
    title: 'Consultation Booking | Precise Accounting',
};

export default async function ConsultationPayment({ params: { lang } }) {
    const dict = await getDictionary(lang);
    return <ConsultationClient lang={lang} dict={dict.consultation} />;
}
