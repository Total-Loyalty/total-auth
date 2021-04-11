module.exports = {
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },

  roots: ['<rootDir>/lib'],
  testMatch: ['<rootDir>/lib/**/*.spec.ts'],
  transformIgnorePatterns: ['node_modules'],
}
