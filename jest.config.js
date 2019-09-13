module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^app(.*)$': '<rootDir>/src$1',
    '^constants(.*)$': '<rootDir>/src/constants$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^clients(.*)$': '<rootDir>/src/clients$1'
  },
  setupFiles: ['<rootDir>/src/setupTests.js'],
  setupFilesAfterEnv: ['jest-expect-message']
};
