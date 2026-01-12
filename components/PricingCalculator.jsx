'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PricingCalculator({ lang, dict }) {
    const [step, setStep] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showInternationalMsg, setShowInternationalMsg] = useState(false);

    // Tax State
    const [taxData, setTaxData] = useState({
        state: '',
        filingStatus: 'single', // Changed to string ID
        dependents: 'no', // string ID
        situationIndices: new Set(),
        situations: []
    });

    // Bookkeeping State
    const [activeTab, setActiveTab] = useState('tax');
    const [bookkeepingData, setBookkeepingData] = useState({
        industry: '',
        revenue: '',
        expenses: '',
        accounts: '',
        employees: '',
        frequency: 'monthly',
        software: 'qbo'
    });

    // Request Form State
    const [showRequestForm, setShowRequestForm] = useState(false);
    const [requestForm, setRequestForm] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
    const [isPaymentFlow, setIsPaymentFlow] = useState(false);

    // Validations & Pricing Maps
    const FILING_PRICES = {
        'single': 0,
        'joint': 30,
        'sep': 0,
        'head': 0,
        'widow': 30
    };

    const DEPENDENT_PRICES = {
        'no': 0,
        'yes': 30
    };

    const STATE_PRICES = {
        // Group 1 ($200)
        'Alaska': 200, 'Florida': 200, 'Nevada': 200, 'South Dakota': 200,
        'Tennessee': 200, 'Texas': 200, 'Washington': 200, 'Wyoming': 200, 'New Hampshire': 200,
        // Group 2 ($300)
        'Arizona': 300, 'Colorado': 300, 'Idaho': 300, 'Indiana': 300, 'Kansas': 300,
        'Kentucky': 300, 'Maine': 300, 'Michigan': 300, 'Minnesota': 300, 'Mississippi': 300,
        'Missouri': 300, 'Nebraska': 300, 'New Mexico': 300, 'North Dakota': 300,
        'Oklahoma': 300, 'South Carolina': 300, 'Utah': 300, 'Wisconsin': 300,
        // Group 3 ($400)
        'Alabama': 400, 'Arkansas': 400, 'Georgia': 400, 'Iowa': 400, 'Louisiana': 400,
        'Montana': 400, 'Rhode Island': 400, 'Vermont': 400, 'West Virginia': 400,
        // Group 4 ($500)
        'California': 500, 'New York': 500, 'New Jersey': 500, 'Pennsylvania': 500,
        'Ohio': 500, 'Maryland': 500, 'Virginia': 500, 'Massachusetts': 500,
        'Illinois': 500, 'Connecticut': 500, 'D.C.': 500, 'Oregon': 500
    };

    const SORTED_STATES = Object.keys(STATE_PRICES).sort();

    // Checkbox options for Tax
    // Using keys to map to dictionary values
    const situationOptions = [
        { key: 'w2', value: 0 },
        { key: 'selfEmployed', value: 50 },
        { key: 'rental', value: 50 },
        { key: 'investment', value: 50 },
        { key: 'crypto', value: 50 },
        { key: 'interest', value: 30 },
        { key: 'retirement', value: 30 },
        { key: 'foreign', value: 100 },
        { key: 'itemized', value: 50 },
        { key: 'education', value: 30 },
        { key: 'depreciation', value: 50 },
    ].map(opt => ({
        ...opt,
        label: dict.income.options[opt.key] || opt.key
    }));

    // Scroll to top on step change
    useEffect(() => {
        const container = document.querySelector('.calculator-container');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        const content = document.querySelector('.calculator-content');
        if (content) content.scrollTop = 0;
    }, [step]);

    useEffect(() => {
        calculateTotal();
    }, [taxData]);

    const calculateTotal = () => {
        let total = 0;

        if (activeTab === 'bookkeeping') {
            setTotalAmount(dict.location.custom || "Custom Quote");
            return;
        }

        // Base Fee (State)
        if (taxData.state === 'custom') {
            setTotalAmount("Custom Quote");
            setShowInternationalMsg(true);
            return;
        } else if (['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(taxData.state)) {
            setTotalAmount(dict.location.unavailable);
            // Message handled in render
            return;
        } else {
            setShowInternationalMsg(false);
        }

        if (taxData.state && STATE_PRICES[taxData.state]) {
            total += STATE_PRICES[taxData.state];
        }

        total += FILING_PRICES[taxData.filingStatus] || 0;
        total += DEPENDENT_PRICES[taxData.dependents] || 0;

        // Sum situations
        const situationTotal = taxData.situations.reduce((acc, curr) => acc + curr, 0);
        total += situationTotal;

        setTotalAmount('$' + total);
    };

    const handleTaxChange = (e) => {
        const { name, value } = e.target;
        setTaxData(prev => ({ ...prev, [name]: value }));
    };

    const handleBookkeepingChange = (e) => {
        const { name, value } = e.target;
        setBookkeepingData(prev => ({ ...prev, [name]: value }));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setStep(1);
        setSubmitStatus(null);
        setShowRequestForm(false);
    };

    // Auto-advance for State selection
    const handleStateChange = (e) => {
        const { name, value } = e.target;
        setTaxData(prev => ({ ...prev, [name]: value }));
    };

    const toggleSituation = (index, cost) => {
        setTaxData(prev => {
            const newIndices = new Set(prev.situationIndices);
            if (newIndices.has(index)) {
                newIndices.delete(index);
            } else {
                newIndices.add(index);
            }

            // Recalculate cost array
            const newSituations = Array.from(newIndices).map(i => situationOptions[i].value);
            return { ...prev, situationIndices: newIndices, situations: newSituations };
        });
    };

    const handleRequestChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '');
            setRequestForm(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setRequestForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSendRequest = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const calculatorData = {
                ...taxData,
                situationIndices: Array.from(taxData.situationIndices).map(i => situationOptions[i].label).join(', '),
                situations: undefined, // remove raw values
                totalEstimate: totalAmount
            };

            const bookkeepingPayload = {
                ...bookkeepingData,
                totalEstimate: totalAmount
            };

            const payload = activeTab === 'bookkeeping' ? bookkeepingPayload : calculatorData;

            const subject = isPaymentFlow ? 'New Service Request' : 'Estimate Request - Tax Preparation';

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: requestForm.name,
                    email: requestForm.email,
                    phone: requestForm.phone,
                    service: activeTab === 'bookkeeping' ? 'Bookkeeping' : 'Tax Preparation',
                    subject: subject,
                    calculatorData: payload
                }),
            });

            if (response.ok) {
                if (isPaymentFlow) {
                    // Proceed to Stripe
                    await performStripeRedirect();
                } else {
                    setSubmitStatus('success');
                    setShowRequestForm(false);
                }
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- STEPPER LOGIC ---

    const TAX_STEPS = [
        { title: dict.steps.location, id: 1 },
        { title: dict.steps.basics, id: 2 },
        { title: dict.steps.income, id: 3 },
        { title: dict.steps.review, id: 4 }
    ];

    const BOOKKEEPING_STEPS = [
        { title: dict.bookkeeping.title, id: 1 },
        { title: dict.review.title, id: 2 }
    ];

    const currentSteps = activeTab === 'bookkeeping' ? BOOKKEEPING_STEPS : TAX_STEPS;
    const totalSteps = currentSteps.length;

    const performStripeRedirect = async () => {
        try {
            const prepayAmount = 200;
            const amount = prepayAmount;

            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    serviceName: 'Tax Preparation',
                }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('No payment URL returned:', data);
                alert('Failed to initiate payment. Please try again.');
            }
        } catch (error) {
            console.error('Payment Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const handlePayment = () => {
        setIsPaymentFlow(true);
        setShowRequestForm(true);
    };

    const nextStep = () => {
        if (step < totalSteps) {
            if (step === 1) {
                const blockedStates = ['custom', 'California', 'Oregon', 'Pennsylvania', 'Maryland'];
                if (blockedStates.includes(taxData.state)) return;
            }
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        const isLastStep = (activeTab === 'tax' && step === 4) || (activeTab === 'bookkeeping' && step === 2);
        if (isLastStep && showRequestForm) {
            setShowRequestForm(false);
            return;
        }
        if (step > 1) setStep(step - 1);
    };

    // Helper Component for Selection Cards
    const SelectionCard = ({ label, value, selected, onChange, type = 'radio', name }) => (
        <label className={`selection-card ${selected ? 'selected' : ''}`}>
            <input
                type={type}
                name={name}
                value={value}
                checked={selected}
                onChange={onChange}
                style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', accentColor: 'var(--color-accent)' }}
            />
            <span className="selection-card-label" style={{ lineHeight: 1.4, marginLeft: '0.75rem' }}>{label}</span>
            {selected && <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginLeft: 'auto' }}>✓</span>}
        </label>
    );

    return (
        <div className="calculator-container">
            {/* Tabs */}
            <div className="tabs">
                <button
                    className={`tab-btn ${activeTab === 'tax' ? 'active' : ''}`}
                    onClick={() => handleTabChange('tax')}
                >
                    {dict.tabs.taxPrep}
                </button>
                <button
                    className={`tab-btn ${activeTab === 'bookkeeping' ? 'active' : ''}`}
                    onClick={() => handleTabChange('bookkeeping')}
                >
                    {dict.tabs.bookkeeping}
                </button>
            </div>

            {/* Progress Bar */}
            <div className="stepper-progress">
                <div className="step-bar">
                    {currentSteps.map((s) => (
                        <div key={s.id} className={`step-dot ${s.id <= step ? 'active' : ''}`}></div>
                    ))}
                </div>
                <div className="step-text-container">
                    <div className="step-count">{dict.steps.progressLabel || 'Step'} {step} / {totalSteps}</div>
                    <div className="step-name">{currentSteps[step - 1].title}</div>
                </div>
            </div>

            {/* Content Area */}
            <div className="calculator-content">

                {/* --- BOOKKEEPING FLOW --- */}
                {activeTab === 'bookkeeping' && step === 1 && (
                    <div className="step-slide">
                        <h2 className="step-title">{dict.bookkeeping.title}</h2>
                        <div className="form-group">
                            <label>{dict.bookkeeping.industry}</label>
                            <input type="text" name="industry" value={bookkeepingData.industry} onChange={handleBookkeepingChange} className="form-input" placeholder="e.g. IT, Retail, Construction" />
                        </div>
                        <div className="form-group">
                            <label>{dict.bookkeeping.revenue}</label>
                            <input type="text" name="revenue" value={bookkeepingData.revenue} onChange={handleBookkeepingChange} className="form-input" placeholder="$0 - $1M" />
                        </div>
                        <div className="form-group">
                            <label>{dict.bookkeeping.expenses}</label>
                            <input type="text" name="expenses" value={bookkeepingData.expenses} onChange={handleBookkeepingChange} className="form-input" placeholder="$" />
                        </div>
                        <div className="form-group">
                            <label>{dict.bookkeeping.accounts}</label>
                            <input type="number" name="accounts" value={bookkeepingData.accounts} onChange={handleBookkeepingChange} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label>{dict.bookkeeping.employees}</label>
                            <input type="number" name="employees" value={bookkeepingData.employees} onChange={handleBookkeepingChange} className="form-input" />
                        </div>

                        <div className="form-group">
                            <label>{dict.bookkeeping.frequency}</label>
                            <select name="frequency" value={bookkeepingData.frequency} onChange={handleBookkeepingChange} className="form-input">
                                <option value="monthly">{dict.bookkeeping.options.monthly}</option>
                                <option value="quarterly">{dict.bookkeeping.options.quarterly}</option>
                                <option value="catchup">{dict.bookkeeping.options.catchup}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{dict.bookkeeping.software}</label>
                            <select name="software" value={bookkeepingData.software} onChange={handleBookkeepingChange} className="form-input">
                                <option value="qbo">{dict.bookkeeping.options.qbo}</option>
                                <option value="xero">{dict.bookkeeping.options.xero}</option>
                                <option value="excel">{dict.bookkeeping.options.excel}</option>
                                <option value="none">{dict.bookkeeping.options.none}</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* --- TAX FLOW --- */}
                {activeTab === 'tax' && step === 1 && (
                    <div className="step-slide">
                        <h2 className="step-title">{dict.location.title}</h2>
                        <div className="form-group">
                            <label>{dict.location.label}</label>
                            <select name="state" value={taxData.state} onChange={handleStateChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                <option value="" disabled>{dict.location.selectState}</option>
                                <option value="custom">{dict.location.notInUSA}</option>
                                <optgroup label={dict.location.unitedStates}>
                                    {SORTED_STATES.map(stateName => (
                                        <option key={stateName} value={stateName} disabled={['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(stateName)}>
                                            {stateName} {['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(stateName) ? `(${dict.location.unavailable})` : ''}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                            {['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(taxData.state) && (
                                <div className="info-box error" style={{ marginTop: '1rem', color: 'red', borderColor: 'red' }}>
                                    {dict.location.errorUnavailable}
                                </div>
                            )}
                            {showInternationalMsg && (
                                <div className="info-box" style={{ marginTop: '1rem' }}>
                                    {dict.location.intlMessage}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'tax' && step === 2 && (
                    <div className="step-slide">
                        <h2 className="step-title">{dict.basics.title}</h2>
                        <div className="form-group">
                            <label>{dict.basics.filingStatus}</label>
                            <select name="filingStatus" value={taxData.filingStatus} onChange={handleTaxChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                <option value="single">{dict.basics.options.single}</option>
                                <option value="joint">{dict.basics.options.joint}</option>
                                <option value="sep">{dict.basics.options.sep}</option>
                                <option value="head">{dict.basics.options.head}</option>
                                <option value="widow">{dict.basics.options.widow}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>{dict.basics.dependents}</label>
                            <div className="selection-grid">
                                <SelectionCard
                                    name="dependents"
                                    value="no"
                                    label={dict.basics.options.no}
                                    selected={taxData.dependents === 'no'}
                                    onChange={handleTaxChange}
                                />
                                <SelectionCard
                                    name="dependents"
                                    value="yes"
                                    label={dict.basics.options.yes}
                                    selected={taxData.dependents === 'yes'}
                                    onChange={handleTaxChange}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'tax' && step === 3 && (
                    <div className="step-slide">
                        <h2 className="step-title">{dict.income.title}</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>{dict.income.subtitle}</p>
                        <div className="selection-grid">
                            {situationOptions.map((option, index) => (
                                <label key={index} className={`selection-card ${taxData.situationIndices.has(index) ? 'selected' : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={taxData.situationIndices.has(index)}
                                        onChange={() => toggleSituation(index, option.value)}
                                    />
                                    <span className="selection-card-label" style={{ marginLeft: '0.5rem' }}>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {((activeTab === 'tax' && step === 4) || (activeTab === 'bookkeeping' && step === 2)) && (
                    <div className="step-slide result-section" style={{ padding: '0' }}>
                        <h2 className="step-title">{dict.review.title}</h2>
                        <div className="total-price">{totalAmount}</div>
                        <p className="disclaimer">
                            {dict.review.disclaimer}
                        </p>

                        {submitStatus === 'success' ? (
                            <div className="info-box success" style={{ margin: '1rem 0', color: 'green', borderColor: 'green' }}>
                                <p>{dict.review.success}</p>
                            </div>
                        ) : showRequestForm ? (
                            <div className="request-form-overlay form-card enhanced-form" style={{ marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                    {isPaymentFlow ? dict.review.bookingTitle : dict.review.requestTitle}
                                </h3>
                                <form onSubmit={handleSendRequest}>
                                    <div className="form-group" style={{ width: '50%', minWidth: '280px', margin: '0 auto 1rem auto', textAlign: 'left' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{dict.review.name}</label>
                                        <input type="text" name="name" required value={requestForm.name} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                    </div>
                                    <div className="form-group" style={{ width: '50%', minWidth: '280px', margin: '0 auto 1rem auto', textAlign: 'left' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{dict.review.email}</label>
                                        <input type="email" name="email" required value={requestForm.email} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                    </div>
                                    <div className="form-group" style={{ width: '50%', minWidth: '280px', margin: '0 auto 1rem auto', textAlign: 'left' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{dict.review.phone}</label>
                                        <input type="tel" inputMode="numeric" pattern="[0-9]*" name="phone" required value={requestForm.phone} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                    </div>
                                    <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center', width: '100%', maxWidth: '100%' }}>
                                        <button type="submit" className="btn btn-primary" style={{ minWidth: '200px' }} disabled={isSubmitting}>
                                            {isSubmitting ? dict.review.processing : (isPaymentFlow ? dict.review.proceedPayment : dict.review.submitRequest)}
                                        </button>
                                    </div>
                                    {submitStatus === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center' }}>{dict.review.error}</p>}
                                </form>
                            </div>
                        ) : (
                            <div className="result-actions">
                                <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                                    {dict.review.depositInfo}
                                </p>
                                {activeTab === 'tax' && (
                                    <button onClick={handlePayment} className="btn btn-primary">{dict.review.reserveBtn}</button>
                                )}
                                <button onClick={() => { setIsPaymentFlow(false); setShowRequestForm(true); }} className="btn btn-secondary-dark">{dict.review.sendRequestBtn}</button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="nav-buttons">
                {step > 1 ? (
                    <button className="btn btn-secondary-dark" onClick={prevStep}>{dict.nav?.back || '← Back'}</button>
                ) : (
                    <div></div> // Spacer
                )}

                {step < totalSteps && (
                    <button className="btn btn-primary" onClick={nextStep}>{dict.nav?.next || 'Next →'}</button>
                )}
            </div>
        </div>
    );
}
