import { LoginResponseData } from '@shared/types/api/response'
import { ApplicationError } from '@/application/errors/ApplicationError'
import { PasswordService } from '@/application/gateways/PasswordService'
import { JwtService } from '@/application/gateways/JwtService'
import { IUserRepository } from '../repositories/IUserRepository'

export class AuthUseCase {
  constructor(
    private readonly _userRepository: IUserRepository,
    private readonly _passwordService: PasswordService,
    private readonly _jwtService: JwtService,
  ) {}

  public async login(
    email: string,
    password: string,
  ): Promise<LoginResponseData> {
    const user = await this._userRepository.findUser(email)
    if (!user) {
      throw ApplicationError.formatErrorCode('LOGIN_FAILD')
    }

    const isPasswordCorrect = this._passwordService.verifyPassword(
      password,
      user.password,
    )

    if (!isPasswordCorrect) {
      throw ApplicationError.formatErrorCode('LOGIN_FAILD')
    }

    const token = this._jwtService.generateToken(String(user.id))

    return {
      userid: user.id,
      token: token,
    }
  }
}
