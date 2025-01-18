export interface IJwtGateway {
  generateToken(id: string): string
}
