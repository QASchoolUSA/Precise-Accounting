import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getDictionary } from '../../get-dictionary';

export async function generateMetadata({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return {
        title: dict.metadata.title,
        description: dict.metadata.description,
        alternates: {
            languages: {
                'en': '/en',
                'ru': '/ru',
            },
        },
    };
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({ children, params: { lang } }) {
    const dict = await getDictionary(lang);

    return (
        <html lang={lang}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </head>
            <body>
                <div id="app">
                    <Header lang={lang} dict={dict.navigation} />
                    <main>{children}</main>
                    <Footer lang={lang} dict={dict.footer} />
                </div>
            </body>
        </html>
    );
}
