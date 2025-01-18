export interface PasswordService {
  hashPassword(plaintextPassword: string): Promise<string>
  verifyPassword(
    plaintextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}
