import { IUserRepository } from '@/application/repositories/IUserRepository'
import { Database } from '@/infrastructure/database/Database'
import { UserORM } from '@/infrastructure/database/entities/UserORM'

export class UserRepository implements IUserRepository {
  public async findUser(email: string): Promise<UserORM | undefined> {
    const dbConnect = Database.getDbConnect()
    const userRepository = dbConnect.getRepository(UserORM)
    const user = await userRepository.findOne({
      select: ['id', 'email', 'password'],
      where: { email },
    })

    return user || undefined
  }
}
