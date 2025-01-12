import { sign } from 'jsonwebtoken'
import { Appconfig } from './config'

export class JwtAdapter {
  static generateToken(id: string): string {
    const jwtPayload = {
      id: id,
    }
    const option = {
      expiresIn: '1d',
    }

    return sign(jwtPayload, Appconfig.JWT_SECRET_KEY, option)
  }
}
