import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

function isDefind(key: any): string {
  const value = process.env[key]
  if (!value) {
    console.error(`環境変数${key}が設定されていません`)
    process.exit(1)
  }
  return value
}

export const Appconfig = {
  IS_PRODUCTION: isDefind('NODE_ENV') === 'production',
  JWT_SECRET_KEY: isDefind('JWT_SECRET_KEY'),
} as const
