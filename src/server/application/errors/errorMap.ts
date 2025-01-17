import { ErrorResponse } from '@shared/types/api/response'

export const errorDefinitions = {
  LOGIN_FAILD: {
    isSuccess: false,
    statusCode: 401,
    title: 'ログインエラー',
    details:
      'メールアドレス、もしくはパスワードが間違っているため、ログインに失敗しました。',
  },
  DATABASE_ERROR: {
    isSuccess: false,
    statusCode: 500,
    title: 'DBエラー',
    details: 'データベースエラーが発生しました。管理者に問い合わせてください。',
  },
  UNKNOWN_ERROR: {
    isSuccess: false,
    statusCode: 500,
    title: '不明なエラー',
    details: '原因不明のエラーが発生しました。管理者に問い合わせてください。',
  },
} as const

export type ErrorKeys = keyof typeof errorDefinitions
type ErrorMap = Record<ErrorKeys, ErrorResponse>

export const errorDetails: ErrorMap = errorDefinitions
