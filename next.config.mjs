/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
    experimental: {
     turbo: true,
     },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            }
        ]
    },

    typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
