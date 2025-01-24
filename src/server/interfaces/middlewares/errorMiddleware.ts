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
    console.error(error)
    res.status(error.errorResponse.statusCode).json(error.errorResponse)
  } else if (error instanceof z.ZodError) {
    console.error(error)
    const details = error.errors.map((e) => {
      console.log(e)
      const [field] = e.path

      return {
        title: 'バリデーションエラー',
        field: String(field),
        message: e.message,
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
  } else {
    console.error(error)
    const errorResponse = ApplicationError.formatErrorCode('UNKNOWN_ERROR')
    res
      .status(errorResponse.errorResponse.statusCode)
      .json(errorResponse.errorResponse)
  }
}
