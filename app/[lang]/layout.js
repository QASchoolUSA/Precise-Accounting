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
                {/* Meta Pixel Code */}
                <script
                    id="meta-pixel"
                    dangerouslySetInnerHTML={{
                        __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1323282592990890');
fbq('track', 'PageView');`
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1323282592990890&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {/* End Meta Pixel Code */}
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
