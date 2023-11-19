/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_MAPS_ACCESS_TOKEN: process.env.GOOGLE_MAPS_ACCESS_TOKEN,
        BACKEND_URL: process.env.BACKEND_URL,
    }
}

module.exports = nextConfig
