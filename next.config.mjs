import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
      allowedOrigins : ["localhost:3000" , "https://friendly-winner-v5gg4r9rpj9c69px-3000.app.github.dev"],
    },
  },
  images: {
    remotePatterns: [new URL('https://lh3.googleusercontent.com/**')],
  },
}

 
export default withNextIntl(nextConfig);