import { JwtAdapter } from '@/infrastructure/JwtAdapter'
import { PasswordAdapter } from '@/infrastructure/PasswordAdapter'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  public async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findUser(email)
    if (!user) {
      throw new Error('DBエラー')
    }

    const isPasswordCorrect = await PasswordAdapter.compare(
      password,
      user.password,
    )

    if (!isPasswordCorrect) {
      throw new Error('Login Failed')
    }

    return JwtAdapter.generateToken(String(user.id))
  }
}
