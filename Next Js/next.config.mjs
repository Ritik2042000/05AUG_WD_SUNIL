/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/products/images/**',
      },
    ],

  },
  redirects: async () => {
    return [
      {
        source: '/login/loginUsers/Users/:user',
        destination: '/login/loginUsers/Users',
        permanent: false
      }
    ]
  }

};

export default nextConfig;
