import { ApplicationError } from '@/application/errors/ApplicationError'
import { NextFunction, Request, Response } from 'express'
import { createErrorResponse } from '@/interfaces/presenters/createErrorResponse'

export function errorMiddleware(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof ApplicationError) {
    console.error(error)
    const responseData = createErrorResponse(
      error.statusCode,
      error.title,
      error.details,
    )
    res.status(error.statusCode).json(responseData)
  } else {
    console.error(error)
    const errorResponse = ApplicationError.formatErrorCode('UNKNOWN_ERROR')
    const responseData = createErrorResponse(
      errorResponse.statusCode,
      errorResponse.title,
      errorResponse.details,
    )
    res.status(500).json(responseData)
  }
}
