import { ApplicationError } from '@/application/errors/ApplicationError'
import { Response } from 'express'
import { errorCode } from '@/maps/errorMap'
import { createErrorResponse } from '@/application/errors/createErrorResponse'

export function errorHandler(error: unknown, res: Response): void {
  if (error instanceof ApplicationError) {
    const responseData = createErrorResponse(
      error.statusCode,
      error.title,
      error.details,
    )
    res.status(error.statusCode).json(responseData)
  } else {
    const error = ApplicationError.formatErrorCode(errorCode.UNKNOWN_ERROR_CODE)
    const responseData = createErrorResponse(
      error.statusCode,
      error.title,
      error.details,
    )
    res.status(500).json(responseData)
  }
}
