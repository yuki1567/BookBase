import { ErrorResponse } from '@shared/types/api/response'

export function createErrorResponse(
  statusCode: number,
  title: string,
  details: string,
): ErrorResponse {
  return {
    isSuccess: false,
    statusCode: statusCode,
    title: title,
    details: details,
  }
}
