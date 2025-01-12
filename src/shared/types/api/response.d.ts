type BaseResponse<T> = SuccessResponse<T> | ErrorResponse

export type SuccessResponse<T> = {
  isSuccess: boolean
  data: T
}

export type ErrorResponse = {
  isSuccess: boolean
  statusCode: number
  title: string
  details: string
}

export type LoginResponse = BaseResponse<LoginResponseData>

export type LoginResponseData = {
  userid: number
  token: string
}
