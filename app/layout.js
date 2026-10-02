import { siteConfig } from '../lib/site';

/** Root metadataBase so icon / opengraph-image resolve to the production host. */
export const metadata = {
    metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }) {
    return children;
}
