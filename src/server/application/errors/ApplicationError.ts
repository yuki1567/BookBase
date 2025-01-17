import { errorDetails, ErrorKeys } from '@/application/errors/errorMap'
import { ErrorResponse } from '@shared/types/api/response'

export class ApplicationError extends Error {
  constructor(private readonly _errorResponse: ErrorResponse) {
    super(_errorResponse.details)
  }

  get statusCode(): number {
    return this._errorResponse.statusCode
  }

  get title(): string {
    return this._errorResponse.title
  }

  get details(): string {
    return this._errorResponse.details
  }

  static formatErrorCode(ErrorKeys: ErrorKeys): ApplicationError {
    return new ApplicationError(errorDetails[ErrorKeys])
  }
}
