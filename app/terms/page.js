export const metadata = {
    title: 'Terms and Conditions | Precise Accounting',
    description: 'Terms and Conditions for Precise Accounting services.',
};

export default function Terms() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Terms and Conditions</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="terms-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Tax Preparation Engagement & Payment Terms</h2>
                        <p className="mb-4">Please review the terms below before submitting your payment. By checking the box, you confirm that you understand and agree to these terms.</p>

                        <div className="terms-section mb-6">
                            <h3>Scope of Services</h3>
                            <p>Precise Accounting LLC (“Preparer”) will prepare the federal and/or state tax returns agreed upon for the taxpayer(s). This includes secure preparation, review, and electronic filing when eligible. Returns are prepared based on the information you provide.</p>
                            <p>Any additional services not included in the agreed-upon scope (additional forms, complex schedules, bookkeeping corrections, etc.) will require authorization and may incur additional fees.</p>
                        </div>

                        <div className="terms-section mb-6">
                            <h3>Fees, Estimates & Payment</h3>
                            <p>To secure services, a deposit or full prepayment is required prior to completing the return and submitting it to the IRS or any state authority.</p>
                            <p>The initial estimate is based on the expected forms and complexity. Because every tax situation is unique:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>The final fee will be determined after a thorough review of your documents and tax profile.</li>
                                <li>If additional work is required beyond the original estimate:
                                    <ul className="list-disc pl-5 mt-1">
                                        <li>You will be informed of the updated amount.</li>
                                        <li>You will be asked to approve the revised fee before that work begins.</li>
                                    </ul>
                                </li>
                            </ul>
                            <p className="mt-2">Fees are not dependent on refund size or tax outcome.</p>
                        </div>

                        <div className="terms-section mb-6">
                            <h3>Refund & Cancellation Policy</h3>
                            <p>We strive for a fair and transparent process:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>100% refund if you cancel before preparation begins.</li>
                                <li>Partial refund if work has started but is not yet completed (based on services already provided).</li>
                                <li>No refund once the return has been completed and provided for review.</li>
                            </ul>
                            <p className="mt-2">Refunds are not issued due to disagreement with tax laws, refund outcomes, or IRS/state determinations.</p>
                        </div>

                        <div className="terms-section mb-6">
                            <h3>Client Responsibilities</h3>
                            <p>You agree to:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Provide accurate and complete tax documentation promptly.</li>
                                <li>Inform us of all relevant tax situations and changes.</li>
                                <li>Review the completed return before authorizing filing.</li>
                            </ul>
                            <p className="mt-2">We are not responsible for delays caused by missing, incomplete, or inaccurate information.</p>
                        </div>

                        <div className="terms-section mb-6">
                            <h3>Communication & Authorization</h3>
                            <p>You authorize Precise Accounting LLC to:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Communicate electronically using secure methods.</li>
                                <li>E-file your return(s) only after you have reviewed and signed authorization forms.</li>
                            </ul>
                            <p className="mt-2">Refund processing times are governed solely by the IRS and state tax agencies.</p>
                        </div>

                        <div className="terms-section mb-6">
                            <h3>Service Limitations</h3>
                            <p>This engagement does not include:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Audit representation or IRS/state correspondence.</li>
                                <li>Legal, financial, or investment advice.</li>
                            </ul>
                            <p className="mt-2">Those services may be provided under separate agreement and fees.</p>
                        </div>

                        <div className="terms-section mb-6">
                            <h3>Agreement Confirmation</h3>
                            <p>☐ I have read and agree to the Tax Preparation Engagement & Payment Terms.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
