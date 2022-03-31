/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^lib/(.*)': '<rootDir>/packages/lib/$1',
  },
  transform: {
    '\\.tsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
  },
  plugins: [require.resolve('@vanilla-extract/babel-plugin')],
};
