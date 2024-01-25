import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-playwright-preset',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/app/$1',
  },
};

export default config;
