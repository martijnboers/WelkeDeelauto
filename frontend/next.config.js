/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_MAPS_ACCESS_TOKEN: process.env.GOOGLE_MAPS_ACCESS_TOKEN,
        BACKEND_URL: process.env.BACKEND_URL,
    },
    reactStrictMode: false,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
}

// Configuration object tells the next-pwa plugin
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public", // Destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
