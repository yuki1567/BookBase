import { User } from '@/domain/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>
}
