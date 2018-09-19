module.exports = {
  moduleFileExtensions: [
    'js', 'jsx', 'json',
    'ts', 'tsx'
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/*\\.scss',
    '!src/index.ts'
  ],
  setupFiles: [
    '<rootDir>/tests/setup.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/*\\.scss'
  ],
  testRegex: '/tests/.+\\.test\\.tsx?$',
  testURL: 'http://localhost/',
}
