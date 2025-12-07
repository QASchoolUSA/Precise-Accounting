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

    // Checkbox options for Tax
    const situationOptions = [
        { label: 'W-2 employment', value: 0 },
        { label: 'Self-employment / contractor income (1099-NEC) (+$50)', value: 50 },
        { label: 'Rental property income (+$50)', value: 50 },
        { label: 'Investment income (stocks, dividends, etc.) (+$50)', value: 50 },
        { label: 'Crypto transactions (+$50)', value: 50 },
        { label: 'Interest income (+$30)', value: 30 },
        { label: 'Retirement income (Social Security, pensions, 1099-R) (+$30)', value: 30 },
        { label: 'Foreign source of income (+$100)', value: 100 },
        { label: 'Itemized deduction (+$50)', value: 50 },
        { label: 'Education credit (1098-T) (+$30)', value: 30 },
        { label: 'Depreciation of vehicles/equipment (+$50)', value: 50 },
    ];

    // Scroll to top on step change
    useEffect(() => {
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
            } else {
                setShowInternationalMsg(false);
            }

            if (taxData.state) {
                total += parseInt(taxData.state);
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
        if (value && value !== 'custom') {
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

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
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
            <span className="selection-card-label" style={{ lineHeight: 1.4 }}>{label}</span>
            {selected && <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>✓</span>}
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
            <div className="stepper-progress">
                <div className="step-indicator">
                    Step {step} of {totalSteps}: <span style={{ color: 'var(--color-brand)' }}>{currentSteps[step - 1].title}</span>
                </div>
                <div className="step-bar">
                    {currentSteps.map((s) => (
                        <div key={s.id} className={`step-dot ${s.id <= step ? 'active' : ''}`}></div>
                    ))}
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
                                    <select name="state" value={taxData.state} onChange={handleStateChange} style={{ padding: '1rem' }}>
                                        <option value="" disabled>Select your state...</option>
                                        <option value="custom">I do NOT reside in the USA</option>
                                        <optgroup label="Group 1 ($200)">
                                            <option value="200">Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming, New Hampshire</option>
                                        </optgroup>
                                        <optgroup label="Group 2 ($300)">
                                            <option value="300">Arizona, Colorado, Idaho, Indiana, Kansas, Kentucky, Maine, Michigan, Minnesota, Mississippi, Missouri, Nebraska, New Mexico, North Dakota, Oklahoma, South Carolina, Utah, Wisconsin</option>
                                        </optgroup>
                                        <optgroup label="Group 3 ($400)">
                                            <option value="400">Alabama, Arkansas, Georgia, Iowa, Louisiana, Montana, Rhode Island, Vermont, West Virginia</option>
                                        </optgroup>
                                        <optgroup label="Group 4 ($500)">
                                            <option value="500">California, New York, New Jersey, Pennsylvania, Ohio, Maryland, Virginia, Massachusetts, Illinois, Connecticut, D.C.</option>
                                        </optgroup>
                                    </select>
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
                                    <div className="selection-grid">
                                        <SelectionCard name="filingStatus" value="single" label="Single" selected={taxData.filingStatus === 'single'} onChange={handleTaxChange} />
                                        <SelectionCard name="filingStatus" value="joint" label="Married Filing Jointly (+$30)" selected={taxData.filingStatus === 'joint'} onChange={handleTaxChange} />
                                        <SelectionCard name="filingStatus" value="sep" label="Married Filing Separately" selected={taxData.filingStatus === 'sep'} onChange={handleTaxChange} />
                                        <SelectionCard name="filingStatus" value="head" label="Head of Household" selected={taxData.filingStatus === 'head'} onChange={handleTaxChange} />
                                        <SelectionCard name="filingStatus" value="widow" label="Qualifying Widow(er) (+$30)" selected={taxData.filingStatus === 'widow'} onChange={handleTaxChange} />
                                    </div>
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
                                            label="Yes (+$30)"
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
                                <div className="result-actions">
                                    <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
                                    <Link href="/contact" className="btn btn-secondary-dark">Proceed Without Payment</Link>
                                </div>
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
                                        <SelectionCard name="method" value="1" label="Cash / Not Sure" selected={bookkeepingData.method === '1'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="method" value="2" label="Accrual (x2 Rate)" selected={bookkeepingData.method === '2'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="step-slide">
                                <h2 className="step-title">Volume</h2>
                                <div className="form-group">
                                    <label>Monthly Transactions</label>
                                    <select name="baseRate" value={bookkeepingData.baseRate} onChange={handleBookkeepingChange} style={{ padding: '1rem' }}>
                                        <option value="250">Up to 300 ($250)</option>
                                        <option value="300">301-600 ($300)</option>
                                        <option value="500">601-1000 ($500)</option>
                                        <option value="1000">1001-2000 ($1000)</option>
                                        <option value="1500">Over 2000 ($1500)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Number of Accounts</label>
                                    <select name="accounts" value={bookkeepingData.accounts} onChange={handleBookkeepingChange} style={{ padding: '1rem' }}>
                                        <option value="0">Up to 5</option>
                                        <option value="50">5-10 (+$50)</option>
                                        <option value="150">Over 10 (+$150)</option>
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
                                        <SelectionCard name="merchant" value="100" label="Yes (+$100)" selected={bookkeepingData.merchant === '100'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Loans/Leases?</label>
                                    <div className="selection-grid">
                                        <SelectionCard name="loans" value="0" label="No" selected={bookkeepingData.loans === '0'} onChange={handleBookkeepingChange} />
                                        <SelectionCard name="loans" value="50" label="Yes (+$50)" selected={bookkeepingData.loans === '50'} onChange={handleBookkeepingChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Depreciable Assets</label>
                                    <select name="assets" value={bookkeepingData.assets} onChange={handleBookkeepingChange} style={{ padding: '1rem' }}>
                                        <option value="0">0</option>
                                        <option value="50">1-5 (+$50)</option>
                                        <option value="100">6-10 (+$100)</option>
                                        <option value="200">Over 10 (+$200)</option>
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
                                <h2 className="step-title">Your Bookkeeping Estimate</h2>
                                <div className="total-price">{totalAmount}</div>
                                <p className="disclaimer">
                                    The amount above represents an approximate estimate only; final fees will be determined once we complete a comprehensive review.
                                </p>
                                <div className="result-actions">
                                    <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
                                    <Link href="/contact" className="btn btn-secondary-dark">Proceed Without Payment</Link>
                                </div>
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
