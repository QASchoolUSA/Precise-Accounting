import { ImageResponse } from 'next/og';
import { siteConfig } from '../lib/site';

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '72px',
                    backgroundColor: '#454545',
                    backgroundImage:
                        'radial-gradient(circle at 85% 20%, rgba(16, 185, 129, 0.35) 0%, rgba(69, 69, 69, 0) 55%)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '28px',
                    }}
                >
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 12,
                            backgroundColor: '#10b981',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontSize: 28,
                            fontWeight: 700,
                            fontFamily: 'sans-serif',
                            marginRight: 16,
                        }}
                    >
                        P
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 28,
                            color: '#e5e5e5',
                            fontFamily: 'sans-serif',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {siteConfig.legalName}
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontSize: 72,
                        fontWeight: 700,
                        color: '#ffffff',
                        fontFamily: 'sans-serif',
                        lineHeight: 1.1,
                        maxWidth: 900,
                    }}
                >
                    {siteConfig.name}
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: 24,
                        fontSize: 32,
                        color: '#10b981',
                        fontFamily: 'sans-serif',
                    }}
                >
                    Accuracy. Integrity. Results.
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: 48,
                        fontSize: 24,
                        color: '#cccccc',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {`${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} · ${siteConfig.phoneDisplay}`}
                </div>
            </div>
        ),
        { ...size }
    );
}
