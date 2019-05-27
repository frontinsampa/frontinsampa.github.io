const path = require('path');

const rootDir = path.resolve(__dirname, '../');

module.exports = {
  rootDir,
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    'jss-snapshot-serializer',
  ],
  coverageDirectory: '<rootDir>/jest/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
  ],
};
