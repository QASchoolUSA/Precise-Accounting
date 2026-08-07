import { getDictionary } from '../../get-dictionary';
import { buildOrganizationJsonLd, buildPageMetadata } from '../../lib/metadata';
import { siteConfig } from '../../lib/site';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AndroidScaler from '../../components/AndroidScaler';
import '../globals.css';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const page = buildPageMetadata({
        lang,
        path: '/',
        title: dict.metadata.title,
        description: dict.metadata.description,
    });

    return {
        metadataBase: new URL(siteConfig.url),
        ...page,
        title: {
            default: dict.metadata.title,
            template: `%s | ${siteConfig.name}`,
        },
        openGraph: {
            ...page.openGraph,
            title: dict.metadata.title,
        },
        twitter: {
            ...page.twitter,
            title: dict.metadata.title,
        },
    };
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const jsonLd = buildOrganizationJsonLd();

    return (
        <html lang={lang}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <AndroidScaler />
                <div id="app">
                    <Header lang={lang} dict={dict.navigation} />
                    <main>{children}</main>
                    <Footer lang={lang} dict={dict.footer} />
                </div>
            </body>
        </html>
    );
}
