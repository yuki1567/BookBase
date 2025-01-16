import { ErrorResponse } from '@shared/types/api/response'

export const errorCode = {
  LOGIN_ERROR_CODE: 1000,
  DATABASE_CONNECTION_ERROR: 8000,
  UNKNOWN_ERROR_CODE: 9999,
} as const satisfies Record<string, number>

export type ErrorCode = (typeof errorCode)[keyof typeof errorCode]

export const errorDetails: Record<number, ErrorResponse> = {
  [errorCode.LOGIN_ERROR_CODE]: {
    isSuccess: false,
    statusCode: 401,
    title: 'ログインエラー',
    details:
      'メールアドレス、もしくはパスワードが間違っているため、ログインに失敗しました。',
  },
  [errorCode.DATABASE_CONNECTION_ERROR]: {
    isSuccess: false,
    statusCode: 500,
    title: 'DBエラー',
    details: 'DBの接続に失敗しています。',
  },
  [errorCode.UNKNOWN_ERROR_CODE]: {
    isSuccess: false,
    statusCode: 500,
    title: '不明なエラー',
    details: '原因不明のエラーが発生しました。',
  },
}
