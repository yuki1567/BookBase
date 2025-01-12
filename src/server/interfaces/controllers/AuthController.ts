import { Request, Response } from 'express'
import { LoginRequest } from '@shared/types/api/request'
import { Appconfig } from '@/infrastructure/config'
import { AuthService } from '@/application/services/AuthService'
import { errorHandler } from '@/application/errors/errorHandler'
import { createSuccessResponse } from '@/interfaces/presenters/createSuccessResponse'

export class AuthController {
  constructor(private authService: AuthService) {}

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password }: LoginRequest = req.body

      const LoginResponseData = await this.authService.login(email, password)

      this.setCookie(res, LoginResponseData.token)

      res.status(200).json(createSuccessResponse(LoginResponseData))
    } catch (error: unknown) {
      errorHandler(error, res)
    }
  }

  private setCookie(res: Response, value: string): void {
    res.cookie(`${value}`, value, {
      httpOnly: true,
      secure: Appconfig.IS_PRODUCTION,
    })
  }
}
