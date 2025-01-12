import { DataSource } from 'typeorm'
import { UserORM } from '../database/entities/UserORM'

export class UserRepository {
  constructor(private dbConnect: DataSource) {}

  public async findUser(email: string): Promise<UserORM | undefined> {
    const userRepository = await this.dbConnect.getRepository(UserORM)
    const user = await userRepository.findOne({
      select: ['id', 'email', 'password'],
      where: { email },
    })

    return user || undefined
  }
}
