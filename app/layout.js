import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Precise Accounting | Accuracy. Integrity. Results.',
    description: 'Precise Accounting - Where numbers meet clarity. Professional accounting services with care, precision, and transparency.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </head>
            <body>
                <div id="app">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
