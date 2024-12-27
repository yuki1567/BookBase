import { Config } from 'jest'

const config: Config = {
  rootDir: '../',
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/server/tests/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  // transformIgnorePatterns: [
  //   '../../node_modules/(?!your-module-to-transform|another-module-to-transform)',
  // ],
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default config
