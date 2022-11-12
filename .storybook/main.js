const path = require('path');

module.exports = {
  stories: [
    '../pages/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..'),
      'node_modules',
      'styles',
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, '../components'),
      '@components': path.resolve(__dirname, '../components'),
      '@public': path.resolve(__dirname, '../assets'),
      '@lib': path.resolve(__dirname, '../lib'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@models': path.resolve(__dirname, '../models'),
      '@styles': path.resolve(__dirname, '../styles'),
      '@constant': path.resolve(__dirname, '../constant'),
      '@mocks': path.resolve(__dirname, '../mocks'),
      '@store': path.resolve(__dirname, '../store'),
    };

    return config;
  },
};
