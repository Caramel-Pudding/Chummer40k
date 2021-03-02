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
  }
};
