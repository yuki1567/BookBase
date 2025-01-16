import { Database } from '../database/Database'
import { UserORM } from '../database/entities/UserORM'

export class UserRepository {
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
