import Link from 'next/link';

export const metadata = {
    title: 'Payroll Setup & Maintenance | Precise Accounting',
    description: 'Professional payroll setup and maintenance services.',
};

export default function PayrollService() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Payroll Setup & Maintenance</h1>
                    <p className="page-subtitle">Accurate, compliant, and stress-free payroll solutions.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="service-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="mb-6">We offer transparent, flexible payroll services designed for small businesses. We take care of the entire process for you, from setup to ongoing maintenance, making sure everything is accurate, compliant, and reported correctly.</p>

                        <div className="service-card mb-6">
                            <h3>Payroll Setup — Starting at $150</h3>
                            <p>This one-time fee covers everything needed to get payroll running correctly, including software configuration, employee onboarding, pay schedule setup, direct deposit, and registration with state agencies. Final setup cost depends on factors like number of states, number of employees, state requirements, prior payroll history, and any needed cleanup.</p>
                        </div>

                        <div className="service-card mb-6">
                            <h3>Monthly Payroll Service - Starting at $50/month</h3>
                            <p>Your monthly fee is based on the structure and complexity of your payroll. Pricing may vary depending on:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text)' }}>
                                <li>Number of employees or contractors</li>
                                <li>Payroll frequency</li>
                                <li>Multi-state payroll needs</li>
                                <li>Hourly, salary, overtime, bonuses, commissions</li>
                                <li>Benefits and deductions</li>
                                <li>PTO tracking and reporting needs</li>
                                <li>Time-tracking integration</li>
                                <li>Required compliance filings (W-2s, 1099s, quarterly reports)</li>
                            </ul>
                            <p className="mt-4">Each quote is tailored to your situation, so you always know exactly what to expect. Let us take payroll off your plate with accuracy and care.</p>
                        </div>

                        <div className="service-actions mt-8 text-center">
                            <Link href="/contact" className="btn btn-primary mr-4">Schedule Consultation</Link>
                            <Link href="/contact" className="btn btn-secondary-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
