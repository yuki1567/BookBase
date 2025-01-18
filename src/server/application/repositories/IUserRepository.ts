import { UserORM } from '@/infrastructure/database/entities/UserORM'

export interface IUserRepository {
  findUser(email: string): Promise<UserORM | undefined>
}
