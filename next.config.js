/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Disabled to support API routes (Stripe)
    trailingSlash: true,
    // Keep page URLs with trailing slashes, but do not 308 metadata asset
    // routes like /icon and /opengraph-image (those break ImageResponse).
    skipTrailingSlashRedirect: true,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
