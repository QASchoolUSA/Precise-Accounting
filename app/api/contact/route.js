import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, businessName, service, calculatorData, subject } = body;

        // Validation
        if (!name || !phone || !email || !service) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure transporter
        // NOTE: These environment variables need to be set in .env.local
        // If not set, this will fail in production/dev
        const transporter = nodemailer.createTransport({
            host: 'mail.spacemail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Format calculator data if present
        let calculatorDetailsHtml = '';
        let calculatorDetailsText = '';

        if (calculatorData) {
            const formatKey = (key) => {
                const map = {
                    filingStatus: 'Filing Status',
                    state: 'State',
                    situationIndices: 'Common Situations',
                    totalEstimate: 'Total Estimate',
                    industry: 'Industry',
                    baseRate: 'Monthly Transactions', // mapping raw value might be needed, but this is a start
                    history: 'Years in Business',
                    merchant: 'Merchant Processors',
                    loans: 'Loans/Leases',
                    assets: 'Depreciable Assets',
                    booksUpdated: 'Books Updated',
                    salesTax: 'Sales Tax',
                    need1099: '1099 Prep',
                    foreignTrans: 'Foreign Transactions',
                    accounts: 'Number of Accounts',
                    method: 'Accounting Method'
                };
                return map[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            };

            const details = Object.entries(calculatorData)
                .filter(([_, value]) => value !== undefined && value !== null && value !== '')
                .map(([key, value]) => {
                    const label = formatKey(key);
                    return { label, value };
                });

            if (details.length > 0) {
                calculatorDetailsHtml = `
                    <h3>Calculator Details</h3>
                    <ul>
                        ${details.map(d => `<li><strong>${d.label}:</strong> ${d.value}</li>`).join('')}
                    </ul>
                `;
                calculatorDetailsText = `
Calculator Details:
${details.map(d => `${d.label}: ${d.value}`).join('\n')}
`;
            }
        }

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'contact@proaccountingusa.com', // Receiver address
            subject: subject || `New Lead: ${name} - ${service}`,
            text: `
New Lead from Website Contact Form:

Name: ${name}
Phone: ${phone}
Email: ${email}
Business Name: ${businessName || 'N/A'}
Interested Service: ${service}

${calculatorDetailsText}

--
Precise Accounting Website
            `,
            html: `
<h3>New Lead from Website Contact Form</h3>
<ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Phone:</strong> ${phone}</li>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Business Name:</strong> ${businessName || 'N/A'}</li>
    <li><strong>Interested Service:</strong> ${service}</li>
</ul>
${calculatorDetailsHtml}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Error sending email', error: error.message },
            { status: 500 }
        );
    }
}
