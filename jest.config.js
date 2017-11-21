module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**'
  ],
  mapCoverage: true,
  setupFiles: [
    '<rootDir>/tests/setup.js'
  ],
  testRegex: '/tests/.+\\.test\\.js$'
}
