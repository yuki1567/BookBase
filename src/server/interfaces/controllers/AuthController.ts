import { Request, Response } from 'express'
import { envConfig } from '@/infrastructure/config/envConfig'
import { AuthUseCase } from '@/application/usecases/AuthUseCase'
import { createSuccessResponse } from '@/interfaces/presenters/createSuccessResponse'
import 'express-async-errors'
import { loginShema } from '../validations/userSchema'

export class AuthController {
  constructor(private readonly _authService: AuthUseCase) {}

  public async login(req: Request, res: Response): Promise<void> {
    const { email, password } = loginShema.parse(req.body)

    const LoginResponseData = await this._authService.login(email, password)

    this.setCookie(res, LoginResponseData.token)

    res.status(200).json(createSuccessResponse(LoginResponseData))
  }

  private setCookie(res: Response, value: string): void {
    res.cookie(`${value}`, value, {
      httpOnly: true,
      secure: envConfig.IS_PRODUCTION,
    })
  }
}
