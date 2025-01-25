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

function handleApplicationError(res: Response, error: ApplicationError) {
  console.error(error)
  res.status(error.errorResponse.statusCode).json(error.errorResponse)
}

function handleZodError(res: Response, error: z.ZodError) {
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
  res
    .status(errorResponse.errorResponse.statusCode)
    .json(errorResponse.errorResponse)
}

function handleUnkownError(res: Response, error: unknown) {
  console.error(error)
  const errorResponse = ApplicationError.formatErrorCode('UNKNOWN_ERROR')
  res
    .status(errorResponse.errorResponse.statusCode)
    .json(errorResponse.errorResponse)
}
