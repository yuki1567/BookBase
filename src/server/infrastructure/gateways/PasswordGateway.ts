import { IPasswordGateway } from '@/application/gateways/IPasswordGateway'
import bcrypt from 'bcrypt'

export class PasswordGateway implements IPasswordGateway {
  private readonly SALT_ROUNDS = 10

  async hashPassword(plaintextPassword: string): Promise<string> {
    return bcrypt.hash(plaintextPassword, this.SALT_ROUNDS)
  }

  async verifyPassword(
    plaintextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plaintextPassword, hashedPassword)
  }
}
