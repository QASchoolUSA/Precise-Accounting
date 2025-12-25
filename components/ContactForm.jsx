'use client';

import { useState } from 'react';

const SERVICES = [
    'Personal Tax Preparation',
    'Business Tax Preparation',
    'Accounting & Bookkeeping',
    'Estimated Tax',
    'Tax Optimization & Planning',
    'Books & Records Reinstatement',
    'Payroll Setup & Maintenance',
    '1099 Preparation & Filing',
    'Sales Tax',
    'New Business Formation',
    'Other'
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        service: SERVICES[0]
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    businessName: '',
                    service: SERVICES[0]
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <p className="mb-6 text-sm text-gray-600">Fill out the form below and we'll get back to you shortly.</p>

            {status === 'success' ? (
                <div className="success-message">
                    <p>Thank you! Your message has been sent successfully. We will be in touch soon.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn btn-secondary-dark mt-4"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="(555) 123-4567"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="businessName">Business Name (Optional)</label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="My Business LLC"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Interested Service *</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="form-input"
                        >
                            {SERVICES.map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>

                    {status === 'error' && (
                        <div className="error-message mb-4">
                            Something went wrong. Please try again or contact us directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary btn-full"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
}
