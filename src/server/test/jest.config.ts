import { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/tests/**/*.test.ts'],
  globals: {
    'ts-jest': {
      useESM: true, // 追加: TypeScriptをESモジュールとして扱う設定
    },
  },
  transformIgnorePatterns: [
    '../../node_modules/(?!your-module-to-transform|another-module-to-transform)', // 追加: 特定のモジュールをトランスフォームする
  ],
}

export default config
