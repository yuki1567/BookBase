import { SuccessResponse } from '@shared/types/api/response'

export function createSuccessResponse<T>(ResponseData: T): SuccessResponse<T> {
  return {
    isSuccess: true,
    data: ResponseData,
  }
}
