import { JwtAdapter } from '@/infrastructure/JwtAdapter'
import { PasswordAdapter } from '@/infrastructure/PasswordAdapter'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'
import { LoginResponseData } from '@shared/types/api/response'
import { errorCode } from '@/maps/errorMap'
import { ApplicationError } from '@/application/errors/ApplicationError'

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  public async login(
    email: string,
    password: string,
  ): Promise<LoginResponseData> {
    const user = await this.userRepository.findUser(email)
    if (!user) {
      throw ApplicationError.formatErrorCode(errorCode.LOGIN_ERROR_CODE)
    }

    const isPasswordCorrect = await PasswordAdapter.compare(
      password,
      user.password,
    )

    if (!isPasswordCorrect) {
      throw ApplicationError.formatErrorCode(errorCode.LOGIN_ERROR_CODE)
    }

    const token = JwtAdapter.generateToken(String(user.id))

    return {
      userid: user.id,
      token: token,
    }
  }
}
