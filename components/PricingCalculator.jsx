'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PricingCalculator() {
    const [activeTab, setActiveTab] = useState('tax');
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
    const [bookkeepingData, setBookkeepingData] = useState({
        industry: '',
        history: '',
        baseRate: '250',
        accounts: '0',
        method: '1',
        merchant: '0',
        loans: '0',
        assets: '0',
        booksUpdated: 'yes',
        salesTax: 'no',
        need1099: 'no',
        foreignTrans: 'no'
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

    const BOOKKEEPING_VARS_PRICES = {
        'yes': 0, // Logic handled separately or just info
        'no': 0
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
        'Illinois': 500, 'Connecticut': 500, 'D.C.': 500
    };

    const SORTED_STATES = Object.keys(STATE_PRICES).sort();

    // Checkbox options for Tax
    const situationOptions = [
        { label: 'W-2 employment', value: 0 },
        { label: 'Self-employment / contractor income (1099-NEC)', value: 50 },
        { label: 'Rental property income', value: 50 },
        { label: 'Investment income (stocks, dividends, etc.)', value: 50 },
        { label: 'Crypto transactions', value: 50 },
        { label: 'Interest income', value: 30 },
        { label: 'Retirement income (Social Security, pensions, 1099-R)', value: 30 },
        { label: 'Foreign source of income', value: 100 },
        { label: 'Itemized deduction', value: 50 },
        { label: 'Education credit (1098-T)', value: 30 },
        { label: 'Depreciation of vehicles/equipment', value: 50 },
    ];

    // Scroll to top on step change
    useEffect(() => {
        const container = document.querySelector('.calculator-container');
        if (container) {
            // Scroll the container into view, aligning it to the top of the viewport + some offset if needed
            // straightforward scrollIntoView is usually best
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // block: 'center' might be better so it doesn't get hidden behind a fixed header
        }

        // Also keep the internal content scroll reset
        const content = document.querySelector('.calculator-content');
        if (content) content.scrollTop = 0;
    }, [step]);

    // Reset step when tab changes
    useEffect(() => {
        setStep(1);
    }, [activeTab]);

    useEffect(() => {
        calculateTotal();
    }, [activeTab, taxData, bookkeepingData]);

    const calculateTotal = () => {
        let total = 0;

        if (activeTab === 'tax') {
            // Base Fee (State)
            if (taxData.state === 'custom') {
                setTotalAmount("Custom Quote");
                setShowInternationalMsg(true);
                return;
            } else if (['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(taxData.state)) {
                setTotalAmount("Estimate Unavailable");
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

        } else {
            // Bookkeeping
            const baseRate = parseInt(bookkeepingData.baseRate);
            total += baseRate;
            total += parseInt(bookkeepingData.accounts);
            total += parseInt(bookkeepingData.merchant);
            total += parseInt(bookkeepingData.loans);
            total += parseInt(bookkeepingData.assets);

            // Method Logic: Accrual (x2 Base Rate)
            if (parseInt(bookkeepingData.method) === 2) {
                total += baseRate;
            }
        }

        setTotalAmount('$' + total);
    };

    const handleTaxChange = (e) => {
        const { name, value } = e.target;
        setTaxData(prev => ({ ...prev, [name]: value }));
    };

    // Auto-advance for State selection
    const handleStateChange = (e) => {
        const { name, value } = e.target;
        setTaxData(prev => ({ ...prev, [name]: value }));

        // Auto-advance logic
        const blockedStates = ['custom', 'California', 'Oregon', 'Pennsylvania', 'Maryland'];
        if (value && !blockedStates.includes(value)) {
            setTimeout(() => {
                nextStep();
            }, 500);
        }
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

    const handleBookkeepingChange = (e) => {
        const { name, value } = e.target;
        setBookkeepingData(prev => ({ ...prev, [name]: value }));
    };

    const handleRequestChange = (e) => {
        const { name, value } = e.target;
        setRequestForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSendRequest = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const calculatorData = activeTab === 'tax' ? {
                ...taxData,
                situationIndices: Array.from(taxData.situationIndices).map(i => situationOptions[i].label).join(', '),
                situations: undefined, // remove raw values
                totalEstimate: totalAmount
            } : {
                ...bookkeepingData,
                totalEstimate: totalAmount
            };

            const subject = isPaymentFlow ? 'New Service Request' : `Estimate Request - ${activeTab === 'tax' ? 'Tax Preparation' : 'Bookkeeping'}`;

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: requestForm.name,
                    email: requestForm.email,
                    phone: requestForm.phone,
                    service: isPaymentFlow ? `Booking Attempt - ${activeTab}` : subject,
                    subject: subject,
                    calculatorData
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
        { title: "Location", id: 1 },
        { title: "Basics", id: 2 },
        { title: "Income & Deductions", id: 3 },
        { title: "Review", id: 4 }
    ];

    const BOOKKEEPING_STEPS = [
        { title: "Business Profile", id: 1 },
        { title: "Volume", id: 2 },
        { title: "Complexity", id: 3 },
        { title: "Compliance", id: 4 },
        { title: "Review", id: 5 }
    ];

    const currentSteps = activeTab === 'tax' ? TAX_STEPS : BOOKKEEPING_STEPS;
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
                    serviceName: activeTab === 'tax' ? 'Tax Preparation' : 'Bookkeeping',
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
            if (activeTab === 'tax' && step === 1) {
                const blockedStates = ['custom', 'California', 'Oregon', 'Pennsylvania', 'Maryland'];
                if (blockedStates.includes(taxData.state)) return;
            }
            setStep(step + 1);
        }
    };

    const prevStep = () => {
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
                // Removed hidden-input class to rely on styled-input css or just standard
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
                    onClick={() => setActiveTab('tax')}
                >
                    Tax Preparation
                </button>
                <button
                    className={`tab-btn ${activeTab === 'bookkeeping' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bookkeeping')}
                >
                    Bookkeeping
                </button>
            </div>

            {/* Progress Bar */}
            {/* Progress Bar */}
            <div className="stepper-progress">
                <div className="step-bar">
                    {currentSteps.map((s) => (
                        <div key={s.id} className={`step-dot ${s.id <= step ? 'active' : ''}`}></div>
                    ))}
                </div>
                <div className="step-text-container">
                    <div className="step-count">Step {step} of {totalSteps}</div>
                    <div className="step-name">{currentSteps[step - 1].title}</div>
                </div>
            </div>

            {/* Content Area */}
            <div className="calculator-content">

                {/* --- TAX FLOW --- */}
                {activeTab === 'tax' && (
                    <>
                        {step === 1 && (
                            <div className="step-slide">
                                <h2 className="step-title">Where do you live?</h2>
                                <div className="form-group">
                                    <label>State of Residence</label>
                                    <select name="state" value={taxData.state} onChange={handleStateChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                        <option value="" disabled>Select your state...</option>
                                        <option value="custom">I do NOT reside in the USA</option>
                                        <optgroup label="United States">
                                            {SORTED_STATES.map(stateName => (
                                                <option key={stateName} value={stateName} disabled={['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(stateName)}>
                                                    {stateName} {['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(stateName) ? '(Unavailable)' : ''}
                                                </option>
                                            ))}
                                        </optgroup>
                                    </select>
                                    {['California', 'Oregon', 'Pennsylvania', 'Maryland'].includes(taxData.state) && (
                                        <div className="info-box error" style={{ marginTop: '1rem', color: 'red', borderColor: 'red' }}>
                                            Sorry - we can’t generate an estimate for this state at this time.
                                        </div>
                                    )}
                                    {showInternationalMsg && (
                                        <div className="info-box" style={{ marginTop: '1rem' }}>
                                            Because you are currently outside the USA, your pricing requires a more detailed review. Please reach out for a custom estimate.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="step-slide">
                                <h2 className="step-title">The Basics</h2>
                                <div className="form-group">
                                    <label>Filing Status</label>
                                    <select name="filingStatus" value={taxData.filingStatus} onChange={handleTaxChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                        <option value="single">Single</option>
                                        <option value="joint">Married Filing Jointly</option>
                                        <option value="sep">Married Filing Separately</option>
                                        <option value="head">Head of Household</option>
                                        <option value="widow">Qualifying Widow(er)</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Do you have dependents?</label>
                                    <div className="selection-grid">
                                        <SelectionCard
                                            name="dependents"
                                            value="no"
                                            label="No"
                                            selected={taxData.dependents === 'no'}
                                            onChange={handleTaxChange}
                                        />
                                        <SelectionCard
                                            name="dependents"
                                            value="yes"
                                            label="Yes"
                                            selected={taxData.dependents === 'yes'}
                                            onChange={handleTaxChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="step-slide">
                                <h2 className="step-title">Income & Situations</h2>
                                <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>Check all that apply to your situation:</p>
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

                        {step === 4 && (
                            <div className="step-slide result-section" style={{ padding: '0' }}>
                                <h2 className="step-title">Your Estimate</h2>
                                <div className="total-price">{totalAmount}</div>
                                <p className="disclaimer">
                                    The amount above represents an approximate estimate only; final fees will be determined once we complete a comprehensive review.
                                </p>

                                {submitStatus === 'success' ? (
                                    <div className="info-box success" style={{ margin: '1rem 0', color: 'green', borderColor: 'green' }}>
                                        <p><strong>Request Sent!</strong> We've received your estimate request and will be in touch shortly.</p>
                                    </div>
                                ) : showRequestForm ? (
                                    <div className="request-form-overlay form-card enhanced-form" style={{ marginTop: '2rem' }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                            {isPaymentFlow ? 'Complete Your Booking' : 'Send My Request'}
                                        </h3>
                                        <form onSubmit={handleSendRequest}>
                                            <div className="form-group">
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                                <input type="text" name="name" required value={requestForm.name} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                                <input type="email" name="email" required value={requestForm.email} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone</label>
                                                <input type="tel" name="phone" required value={requestForm.phone} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                            </div>
                                            <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                                    {isSubmitting ? 'Processing...' : (isPaymentFlow ? 'Proceed to Payment' : 'Submit Request')}
                                                </button>
                                                <button type="button" className="btn btn-secondary" onClick={() => setShowRequestForm(false)}>Cancel</button>
                                            </div>
                                            {submitStatus === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>Failed to send. Please try again.</p>}
                                        </form>
                                    </div>
                                ) : (
                                    <div className="result-actions">
                                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                                            To reserve your spot and start the process, we require a <strong>$200 initial deposit</strong>. This amount will be credited towards your final fee.
                                        </p>
                                        <button onClick={handlePayment} className="btn btn-primary">Reserve My Spot!</button>
                                        <button onClick={() => { setIsPaymentFlow(false); setShowRequestForm(true); }} className="btn btn-secondary-dark">Send My Request</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}

                {/* --- BOOKKEEPING FLOW --- */}
                {activeTab === 'bookkeeping' && (
                    <>
                        {step === 1 && (
                            <div className="step-slide">
                                <h2 className="step-title">Business Profile</h2>
                                <div className="form-group">
                                    <label>Industry</label>
                                    <input type="text" name="industry" value={bookkeepingData.industry} onChange={handleBookkeepingChange} placeholder="e.g. Retail, Tech..." />
                                </div>
                                <div className="form-group">
                                    <label>Years in Business</label>
                                    <input type="text" name="history" value={bookkeepingData.history} onChange={handleBookkeepingChange} placeholder="e.g. 2 years" />
                                </div>
                                <div className="form-group">
                                    <label>Accounting Method</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="method" value="1" label="Cash" selected={true} onChange={() => { }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="step-slide">
                                <h2 className="step-title">Volume</h2>
                                <div className="form-group">
                                    <label>Monthly Transactions</label>
                                    <select name="baseRate" value={bookkeepingData.baseRate} onChange={handleBookkeepingChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                        <option value="250">Up to 300</option>
                                        <option value="300">301-600</option>
                                        <option value="500">601-1000</option>
                                        <option value="1000">1001-2000</option>
                                        <option value="1500">Over 2000</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Number of Accounts</label>
                                    <select name="accounts" value={bookkeepingData.accounts} onChange={handleBookkeepingChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                        <option value="0">Up to 5</option>
                                        <option value="50">5-10</option>
                                        <option value="150">Over 10</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="step-slide">
                                <h2 className="step-title">Complexity</h2>
                                <div className="form-group">
                                    <label>Merchant Processors?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="merchant" value="0" label="No" selected={bookkeepingData.merchant === '0'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="merchant" value="100" label="Yes" selected={bookkeepingData.merchant === '100'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Loans/Leases?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="loans" value="0" label="No" selected={bookkeepingData.loans === '0'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="loans" value="50" label="Yes" selected={bookkeepingData.loans === '50'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Depreciable Assets</label>
                                    <select name="assets" value={bookkeepingData.assets} onChange={handleBookkeepingChange} style={{ padding: '1rem', width: '100%', maxWidth: '100%' }}>
                                        <option value="0">0</option>
                                        <option value="50">1-5</option>
                                        <option value="100">6-10</option>
                                        <option value="200">Over 10</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="step-slide">
                                <h2 className="step-title">Compliance & Status</h2>
                                <div className="form-group">
                                    <label>Are books up to date?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="booksUpdated" value="yes" label="Yes" selected={bookkeepingData.booksUpdated === 'yes'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="booksUpdated" value="no" label="No" selected={bookkeepingData.booksUpdated === 'no'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Need Sales Tax filings?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="salesTax" value="no" label="No" selected={bookkeepingData.salesTax === 'no'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="salesTax" value="yes" label="Yes" selected={bookkeepingData.salesTax === 'yes'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Need 1099 Prep?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="need1099" value="no" label="No" selected={bookkeepingData.need1099 === 'no'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="need1099" value="yes" label="Yes" selected={bookkeepingData.need1099 === 'yes'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Any Foreign Transactions?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="foreignTrans" value="no" label="No" selected={bookkeepingData.foreignTrans === 'no'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="foreignTrans" value="yes" label="Yes" selected={bookkeepingData.foreignTrans === 'yes'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 5 && (
                            <div className="step-slide result-section" style={{ padding: '0' }}>
                                <h2 className="step-title">Your Monthly Bookkeeping Estimate</h2>
                                <div className="total-price">{totalAmount}</div>
                                <p className="disclaimer">
                                    The amount above represents an approximate estimate only; final fees will be determined once we complete a comprehensive review.
                                </p>

                                {submitStatus === 'success' ? (
                                    <div className="info-box success" style={{ margin: '1rem 0', color: 'green', borderColor: 'green' }}>
                                        <p><strong>Request Sent!</strong> We've received your estimate request and will be in touch shortly.</p>
                                    </div>
                                ) : showRequestForm ? (
                                    <div className="request-form-overlay form-card enhanced-form" style={{ marginTop: '2rem' }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                            {isPaymentFlow ? 'Complete Your Booking' : 'Send My Request'}
                                        </h3>
                                        <form onSubmit={handleSendRequest}>
                                            <div className="form-group">
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                                <input type="text" name="name" required value={requestForm.name} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                                <input type="email" name="email" required value={requestForm.email} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone</label>
                                                <input type="tel" name="phone" required value={requestForm.phone} onChange={handleRequestChange} className="form-input" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                                            </div>
                                            <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                                    {isSubmitting ? 'Processing...' : (isPaymentFlow ? 'Proceed to Payment' : 'Submit Request')}
                                                </button>
                                                <button type="button" className="btn btn-secondary" onClick={() => setShowRequestForm(false)}>Cancel</button>
                                            </div>
                                            {submitStatus === 'error' && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>Failed to send. Please try again.</p>}
                                        </form>
                                    </div>
                                ) : (
                                    <div className="result-actions">
                                        <button onClick={() => { setIsPaymentFlow(false); setShowRequestForm(true); }} className="btn btn-primary">Send My Request</button>
                                        <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="nav-buttons">
                {step > 1 ? (
                    <button className="btn btn-secondary-dark" onClick={prevStep}>← Back</button>
                ) : (
                    <div></div> // Spacer
                )}

                {step < totalSteps && (
                    <button className="btn btn-primary" onClick={nextStep}>Next →</button>
                )}
            </div>
        </div>
    );
}
