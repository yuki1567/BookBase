import { errorDetails, ErrorKeys } from '@/application/errors/errorMap'
import { ErrorResponse } from '@shared/types/api/response'

export class ApplicationError extends Error {
  constructor(private readonly _errorResponse: ErrorResponse) {
    super(_errorResponse.details[0].message)
  }

  get errorResponse(): ErrorResponse {
    return this._errorResponse
  }

  static formatErrorCode(ErrorKeys: ErrorKeys): ApplicationError {
    return new ApplicationError(errorDetails[ErrorKeys])
  }
}
