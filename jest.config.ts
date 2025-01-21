export default {
  collectCoverage: true,
  coverageDirectory: 'docs/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  watchman: true,
};
