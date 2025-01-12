import { errorDetails, ErrorCode } from '@/maps/errorMap'

export class ApplicationError extends Error {
  constructor(
    private _statusCode: number,
    private _title: string,
    private _details: string,
  ) {
    super(_details)
  }

  get statusCode(): number {
    return this._statusCode
  }

  get title(): string {
    return this._title
  }

  get details(): string {
    return this._details
  }

  static formatErrorCode(errorCode: ErrorCode): ApplicationError {
    const error = errorDetails[errorCode]
    if (!error) {
      throw new Error(`未定義のエラーコードです。(${errorCode})`)
    }

    return new ApplicationError(error.statusCode, error.title, error.details)
  }
}
