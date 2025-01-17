import { JwtAdapter } from '@/infrastructure/adapters/JwtAdapter'
import { PasswordAdapter } from '@/infrastructure/adapters/PasswordAdapter'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'
import { LoginResponseData } from '@shared/types/api/response'
import { ApplicationError } from '@/application/errors/ApplicationError'

export class AuthService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async login(
    email: string,
    password: string,
  ): Promise<LoginResponseData> {
    const user = await this._userRepository.findUser(email)
    if (!user) {
      throw ApplicationError.formatErrorCode('LOGIN_FAILD')
    }

    const isPasswordCorrect = await PasswordAdapter.compare(
      password,
      user.password,
    )

    if (!isPasswordCorrect) {
      throw ApplicationError.formatErrorCode('LOGIN_FAILD')
    }

    const token = JwtAdapter.generateToken(String(user.id))

    return {
      userid: user.id,
      token: token,
    }
  }
}
