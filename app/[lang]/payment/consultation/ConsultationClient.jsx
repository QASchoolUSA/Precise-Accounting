'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ConsultationContent({ lang, dict }) {
    const searchParams = useSearchParams();
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

    const handleBooking = () => {
        if (!termsAccepted) {
            alert("Please read and agree to the Consultation Engagement Terms before proceeding.");
            return;
        }

        const calUrl = `https://cal.com/precise-accounting?lang=${lang}`;

        // We can pass params to Cal.com if needed, but for now a direct redirect is fine per request
        // const amount = searchParams.get('amount') || 150;
        // const desc = searchParams.get('desc') || 'Consultation';

        window.location.href = calUrl;
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">{dict.title}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="payment-content" style={{ maxWidth: '600px', margin: '0 auto' }}>

                        <div className="intro-text mb-6">
                            <h2 className="section-title text-left" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{dict.bookTitle}</h2>
                            <p>{dict.reviewTerms}</p>
                        </div>

                        <div className="terms-box" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
                            <div className="terms-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => setTermsOpen(!termsOpen)}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{dict.termsHeader}</h3>
                                <span>{termsOpen ? '▲' : '▼'}</span>
                            </div>

                            {termsOpen && (
                                <div className="terms-body" style={{ fontSize: '0.9rem', color: '#555', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                    <p className="mb-2"><strong>{dict.entityName}</strong><br />{dict.bookingConfirm}</p>

                                    <h4 className="font-bold mt-4 mb-1">{dict.scopeTitle}</h4>
                                    <p className="mb-2">{dict.scopeText}</p>
                                    <p className="mb-2">{dict.excludeTitle}</p>
                                    <ul className="list-disc pl-5 mb-2">
                                        {dict.excludeList.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="mb-2">{dict.additionalServices}</p>

                                    <h4 className="font-bold mt-4 mb-1">{dict.optTitle}</h4>
                                    <p className="mb-2">{dict.optText1}</p>
                                    <p className="mb-2">{dict.optText2}</p>

                                    <h4 className="font-bold mt-4 mb-1">{dict.feeTitle}</h4>
                                    <p className="mb-2">{dict.feeText}</p>

                                    <h4 className="font-bold mt-4 mb-1">{dict.cancelTitle}</h4>
                                    <ul className="list-disc pl-5 mb-2">
                                        {dict.cancelList.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="mb-2">{dict.noRefund}</p>

                                    <h4 className="font-bold mt-4 mb-1">{dict.respTitle}</h4>
                                    <p className="mb-2">{dict.respText}</p>
                                </div>
                            )}

                            <div className="terms-agreement mt-4 pt-4" style={termsOpen ? { borderTop: '1px solid #eee' } : {}}>
                                <label className="flex items-start cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={termsAccepted}
                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                        style={{ marginTop: '0.25rem', marginRight: '0.75rem', transform: 'scale(1.2)' }}
                                    />
                                    <span style={{ fontSize: '0.95rem' }}>{dict.agreeTerms}</span>
                                </label>
                            </div>
                        </div>

                        <button
                            className={`btn btn-primary btn-full ${!termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleBooking}
                            disabled={!termsAccepted}
                            style={{ width: '100%' }}
                        >
                            {dict.proceedBtn}
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}

export default function ConsultationClient({ lang, dict }) {
    return (
        <Suspense fallback={<div className="container py-10 text-center">Loading booking details...</div>}>
            <ConsultationContent lang={lang} dict={dict} />
        </Suspense>
    );
}
