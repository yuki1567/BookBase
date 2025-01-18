import { IUserRepository } from '@/application/repositories/IUserRepository'
import { User } from '@/domain/User'
import { Database } from '@/infrastructure/database/Database'

export class UserRepository implements IUserRepository {
  public async findByEmail(email: string): Promise<User | undefined> {
    const dbConnect = Database.getDbConnect()
    const userRepository = dbConnect.getRepository(User)
    const user = await userRepository.findOneBy({ email })

    return user || undefined
  }
}
