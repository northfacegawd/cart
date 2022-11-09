const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@models/(.*)$': '<rootDir>/models/$1',
    '^@mocks/(.*)$': '<rootDir>/mocks/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@constant/(.*)$': '<rootDir>/constant/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
