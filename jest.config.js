/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^lib/(.*)': '<rootDir>/packages/lib/$1',
    '^packages/(.*)': '<rootDir>/packages/$1',
  },
  transform: {
    '\\.tsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
