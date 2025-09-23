import { resolve } from 'path';
import { fileURLToPath } from 'url';

const CI = !!process.env.CI;

const ROOT_DIR = fileURLToPath(new URL('./', import.meta.url));

const ESM_PACKAGES = ['graphql'];

const modulePathIgnorePatterns = ['dist', 'test-assets', 'test-files', 'fixtures', '.bob'];

export default {
  testEnvironment: 'node',
  rootDir: ROOT_DIR,
  prettierPath: null, // disable prettier for inline snapshots
  restoreMocks: true,
  reporters: ['default'],
  modulePathIgnorePatterns,
  collectCoverage: false,
  cacheDirectory: resolve(ROOT_DIR, `${CI ? '' : 'node_modules/'}.cache/jest`),
  transform: {
    '^.+\\.mjs?$': 'babel-jest',
    '^.+\\.ts?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!(${ESM_PACKAGES.join('|')})/)`],
  resolver: 'bob-the-bundler/jest-resolver',
};
