import { LoginResponseData } from '@shared/types/api/response'
import { ApplicationError } from '@/application/errors/ApplicationError'
import { IPasswordGateway } from '@/application/gateways/IPasswordGateway'
import { IJwtGateway } from '@/application/gateways/IJwtGateway'
import { IUserRepository } from '../repositories/IUserRepository'

export class AuthUseCase {
  constructor(
    private readonly _userRepository: IUserRepository,
    private readonly _passwordService: IPasswordGateway,
    private readonly _jwtService: IJwtGateway,
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
