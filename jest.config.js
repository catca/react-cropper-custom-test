const SRC_PATH = '<rootDir>/src';

module.exports = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  modulePaths: ['<rootDir>'],
  roots: [SRC_PATH],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/styles/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@components/(.*)$": "<rootDir>/components/$1"
  },
  testEnvironment: 'jsdom'
};
