export interface JwtService {
  generateToken(id: string): string
}
