import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, businessName, service } = body;

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
            service: 'gmail', // Or use 'host', 'port' etc for other providers
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'contact@proaccountingusa.com', // Receiver address
            subject: `New Lead: ${name} - ${service}`,
            text: `
New Lead from Website Contact Form:

Name: ${name}
Phone: ${phone}
Email: ${email}
Business Name: ${businessName || 'N/A'}
Interested Service: ${service}

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
