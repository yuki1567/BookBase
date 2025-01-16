import { ApplicationError } from '@/application/errors/ApplicationError'
import { NextFunction, Request, Response } from 'express'
import { errorCode } from '@/maps/errorMap'
import { createErrorResponse } from '@/interfaces/presenters/createErrorResponse'

export function errorMiddleware(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
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
