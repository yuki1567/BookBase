import bcrypt from 'bcrypt'

export class PasswordAdapter {
  private static readonly SALT_ROUNDS = 10

  static async hash(plaintextPassword: string): Promise<string> {
    return bcrypt.hash(plaintextPassword, this.SALT_ROUNDS)
  }

  static async compare(
    plaintextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plaintextPassword, hashedPassword)
  }
}
