const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": path.resolve(
      __dirname,
      "__mocks__/styleMock.js"
    ),
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  verbose: true,
};
