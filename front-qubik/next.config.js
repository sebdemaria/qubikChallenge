/** @type {import('next').NextConfig} */

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["http2.mlstatic.com"],
    },
    webpack: {
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    },
};

module.exports = nextConfig;
