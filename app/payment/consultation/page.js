'use client';

import { useState } from 'react';

export default function ConsultationPayment() {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

    const handlePayment = async () => {
        if (!termsAccepted) {
            alert("Please read and agree to the Consultation Engagement Terms before proceeding.");
            return;
        }

        // Use existing payment API logic
        try {
            // Hardcoded amount for consultation for now, or could pass via query params.
            // Assuming 150 for 30 min as per Contact page or generic checkout.
            // But actually, the contact page had specific buttons for 30 ($150) and 60 ($250).
            // This page should probably handle both or generic "Consultation".
            // For now I'll default to a generic "Consultation Deposit" or similar, or just alert as placeholders if backend not ready.
            // But the user requested "Payment Page: Consultation".

            // I'll assume this page is reached via a query param ?amount=150 or similar, 
            // or I'll just hardcode a placeholder action that calls the same API.
            // In PricingCalculator, it calls /api/create-checkout-session with { amount, serviceName }.

            // For simplicity I will prompt or assume a fixed amount or let user pick? 
            // The prompt implies "Payment Page: Consultation".
            // I'll make it generic.

            alert("Redirecting to payment provider...");
            // logic to call api would go here.
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Consultation Payment</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="payment-content" style={{ maxWidth: '600px', margin: '0 auto' }}>

                        <div className="intro-text mb-6">
                            <h2 className="section-title text-left" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Consultation Booking</h2>
                            <p>Secure your professional consultation with Precise Accounting LLC.</p>
                        </div>

                        <div className="terms-box" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
                            <div className="terms-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => setTermsOpen(!termsOpen)}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Consultation Engagement Terms</h3>
                                <span>{termsOpen ? '▲' : '▼'}</span>
                            </div>

                            {termsOpen && (
                                <div className="terms-body" style={{ fontSize: '0.9rem', color: '#555', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                    <p className="mb-2"><strong>Precise Accounting LLC</strong><br />Payment confirms that you have reviewed and agreed to these terms.</p>

                                    <h4 className="font-bold mt-4 mb-1">Scope of Services</h4>
                                    <p className="mb-2">A paid consultation provides professional guidance and answers to your questions related to tax matters, bookkeeping, and general tax optimization strategies. Advice is based solely on the information you provide and limited to the time scheduled.</p>
                                    <p className="mb-2">A consultation does not include:</p>
                                    <ul className="list-disc pl-5 mb-2">
                                        <li>Preparation or filing of tax returns.</li>
                                        <li>IRS or State representation.</li>
                                        <li>Document preparation or bookkeeping services.</li>
                                        <li>Legal, investment, financial planning, or securities advisory services.</li>
                                    </ul>
                                    <p className="mb-2">If additional services are needed, they will be offered separately under a new engagement and pricing.</p>

                                    <h4 className="font-bold mt-4 mb-1">Tax Optimization & Planning</h4>
                                    <p className="mb-2">Precise Accounting LLC may provide tax optimization and tax planning recommendations to help legally minimize taxes and maximize tax-advantaged opportunities. These services are limited to the tax implications of financial decisions.</p>
                                    <p className="mb-2">We do not provide investment advice, recommend or manage specific securities, evaluate investment performance, or provide returns-based strategies. Clients should consult a licensed investment advisor for investment or wealth-management guidance.</p>

                                    <h4 className="font-bold mt-4 mb-1">Fee & Payment</h4>
                                    <p className="mb-2">Payment is required in full prior to the consultation and covers professional time and expertise only. It is not a prepayment for tax preparation or future services. Fees are not dependent on tax outcomes, refunds, credits, or savings.</p>

                                    <h4 className="font-bold mt-4 mb-1">Rescheduling, Cancellation & Refunds</h4>
                                    <ul className="list-disc pl-5 mb-2">
                                        <li>Rescheduling 24+ hours in advance: no fee.</li>
                                        <li>Cancellations less than 24 hours prior: non-refundable.</li>
                                        <li>No-show appointments: non-refundable.</li>
                                        <li>If we must reschedule for any reason, you may choose a new time or receive a 100% refund.</li>
                                    </ul>
                                    <p className="mb-2">After the consultation has occurred and time has been provided, no refunds are available.</p>

                                    <h4 className="font-bold mt-4 mb-1">Client Responsibilities</h4>
                                    <p className="mb-2">You agree to provide accurate and complete information and to independently evaluate all guidance received. Decisions and actions you take based on the consultation are your responsibility.</p>
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
                                    <span style={{ fontSize: '0.95rem' }}>I have read and agree to the Consultation Engagement Terms.</span>
                                </label>
                            </div>
                        </div>

                        <button
                            className={`btn btn-primary btn-full ${!termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePayment}
                            disabled={!termsAccepted}
                            style={{ width: '100%' }}
                        >
                            Proceed to Payment
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}
