import { Request, Response } from 'express'
import { LoginRequest } from '@shared/types/api/request'
import { Appconfig } from '@/infrastructure/config'
import { AuthService } from '@/application/AuthService'

export class AuthController {
  constructor(private authService: AuthService) {}

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password }: LoginRequest = req.body

      const token = this.authService.login(email, password)

      res.cookie('token', token, {
        httpOnly: true,
        secure: Appconfig.IS_PRODUCTION,
      })

      res.json({ message: 'Login Success' })
    } catch (e) {
      if (e instanceof Error) {
        res.json({
          message: e.message,
        })
      }
    }
  }
}
