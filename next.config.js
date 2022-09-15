/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack(config) {
  //   const fileLoaderRule = config.module.rules.find(
  //     rule => rule.test && rule.test.test('.svg'),
  //   );
  //   fileLoaderRule.exclude = /\.svg$/;
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     loader: require.resolve('@svgr/webpack'),
  //   });
  //   return config;
  // },
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
    locales: ['en', 'ru', 'uk', 'cs'],
    defaultLocale: 'ru',
  },
  images: {
    loader: 'default',
    domains: ['powerful-brushlands-30427.herokuapp.com', 'localhost'],
  },
};

module.exports = nextConfig;
