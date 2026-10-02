import { getDictionary } from '../../get-dictionary';
import { buildPageMetadata, buildSitewideJsonLd } from '../../lib/metadata';
import { siteConfig } from '../../lib/site';
import { DEFAULT_THEME } from '../../lib/themes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AndroidScaler from '../../components/AndroidScaler';
import JsonLd from '../../components/JsonLd';
import { ThemeProvider } from '../../components/ThemeProvider';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import '../globals.css';
import '../themes.css';

const THEME_FONTS =
    'https://fonts.googleapis.com/css2?' +
    [
        'family=Fraunces:opsz,wght@9..144,500;600;700',
        'family=Source+Sans+3:wght@300;400;500;600;700',
        'family=Outfit:wght@400;500;600;700',
        'family=Libre+Baskerville:wght@400;700',
        'family=IBM+Plex+Sans:wght@300;400;500;600;700',
        'family=Space+Grotesk:wght@400;500;600;700',
        'family=DM+Serif+Display',
        'family=DM+Sans:wght@400;500;600;700',
    ].join('&') +
    '&display=swap';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const page = buildPageMetadata({
        lang,
        path: '/',
        title: dict.metadata.title,
        description: dict.metadata.description,
    });

    const verification = {};
    if (siteConfig.verification?.google) {
        verification.google = siteConfig.verification.google;
    }
    if (siteConfig.verification?.bing) {
        verification.other = { 'msvalidate.01': siteConfig.verification.bing };
    }

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
        ...(Object.keys(verification).length > 0 ? { verification } : {}),
    };
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const sitewideJsonLd = buildSitewideJsonLd(lang);

    return (
        <html lang={lang} data-theme={DEFAULT_THEME} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href={THEME_FONTS} rel="stylesheet" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var k='pa-design-theme';var t=localStorage.getItem(k);var ok=['ledger','studio','cornerstone','clarity','harbor'];if(ok.indexOf(t)!==-1)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
                    }}
                />
                <JsonLd data={sitewideJsonLd} />
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
                <ThemeProvider defaultTheme={DEFAULT_THEME}>
                    <AndroidScaler />
                    <div id="app">
                        <Header lang={lang} dict={dict.navigation} />
                        <main>{children}</main>
                        <Footer lang={lang} dict={dict.footer} />
                    </div>
                    <ThemeSwitcher />
                </ThemeProvider>
            </body>
        </html>
    );
}
