import { IUserRepository } from '@/application/repositories/IUserRepository'
import { User } from '@/domain/User'
import { Database } from '@/infrastructure/database/Database'
import { UserORM } from '@/infrastructure/database/entities/UserORM'

export class UserRepository implements IUserRepository {
  public async findByEmail(email: string): Promise<User | undefined> {
    const dbConnect = Database.getDbConnect()
    const userRepository = dbConnect.getRepository(UserORM)
    const userEntity = await userRepository.findOneBy({ email })

    const user = userEntity
      ? new User(userEntity.id, userEntity.email, userEntity.password)
      : undefined

    return user
  }
}
