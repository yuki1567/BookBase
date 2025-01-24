import { ApplicationError } from '@/application/errors/ApplicationError'
import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

export function errorMiddleware(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof ApplicationError) {
    handleApplicationError(res, error)
  } else if (error instanceof z.ZodError) {
    handleZodError(res, error)
  } else {
    handleUnkownError(res, error)
  }
}

function handleApplicationError(response: Response, error: ApplicationError) {
  console.error(error)
  response.status(error.errorResponse.statusCode).json(error.errorResponse)
}

function handleZodError(response: Response, error: z.ZodError) {
  console.error(error)
  const details = error.errors.map(({ path, message }) => {
    return {
      title: 'バリデーションエラー',
      field: String(path),
      message: message,
    }
  })

  const errorResponse = new ApplicationError({
    isSuccess: false,
    statusCode: 200,
    details: details,
  })
  response
    .status(errorResponse.errorResponse.statusCode)
    .json(errorResponse.errorResponse)
}

function handleUnkownError(response: Response, error: unknown) {
  console.error(error)
  const errorResponse = ApplicationError.formatErrorCode('UNKNOWN_ERROR')
  response
    .status(errorResponse.errorResponse.statusCode)
    .json(errorResponse.errorResponse)
}
