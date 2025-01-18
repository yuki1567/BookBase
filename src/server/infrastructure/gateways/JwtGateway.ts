import { sign } from 'jsonwebtoken'
import { envConfig } from '@/infrastructure/config/envConfig'
import { JwtService } from '@/application/interfaces/JwtService'

export class JwtGateway implements JwtService {
  public generateToken(id: string): string {
    const jwtPayload = {
      id: id,
    }
    const option = {
      expiresIn: '1d',
    }

    return sign(jwtPayload, envConfig.JWT_SECRET_KEY, option)
  }
}
