const { resolve } = require('path');

// Jest.config.js
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: ".coverage",
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["./jest.setup.js"],
  // Stubbing CSS imports to properly work with CSS Modules 
  moduleNameMapper: {
    '\\.(css|scss)$': "identity-obj-proxy",
  },
  // Ignore the build directory
  modulePathIgnorePatterns: ["<rootDir>/.next/"],
  testMatch: [
    "**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  moduleNameMapper: {
    '^@/components/(.*)$': resolve(__dirname, './src/components/$1'),
    '^@/hooks/(.*)$': resolve(__dirname, './src/hooks/$1'),
    '^@/pages/(.*)$': resolve(__dirname, './src/pages/$1'),
    '^@/redux/(.*)$': resolve(__dirname, './src/redux/$1'),
    '^@/styles/(.*)$': resolve(__dirname, './src/styles/$1'),
    '^@/tests/(.*)$': resolve(__dirname, './src/__tests__/$1'),
    '^@/types/(.*)$': resolve(__dirname, './src/types/$1'),
    '^@/utilities/(.*)$': resolve(__dirname, './src/utilities/$1'),
  },
};
