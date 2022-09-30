/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  i18n: {
    locales: ['en', 'ru', 'uk'],
    defaultLocale: 'ru',
  },
  images: {
    loader: 'default',
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/how-to-open-love-in-you',
        destination: 'https://lovebook.rizhenko.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
