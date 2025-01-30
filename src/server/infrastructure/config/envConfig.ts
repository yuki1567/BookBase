import { Config } from '@/infrastructure/types/config'
import dotenv from 'dotenv'

dotenv.config({ path: '/var/www/html/.env' })

function isDefind(key: string): string {
  const value = process.env[key]
  if (!value) {
    console.error(`環境変数${key}が設定されていません`)
    process.exit(1)
  }
  return value
}

export const envConfig = {
  IS_PRODUCTION: isDefind('NODE_ENV') === 'production',
  JWT_SECRET_KEY: isDefind('JWT_SECRET_KEY'),
} as const satisfies Config
