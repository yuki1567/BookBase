import { User } from '@/app/domain/entities/User'
import AppDataSource from '@/config/data-source'
import { faker } from '@faker-js/faker'

async function seed(): Promise<void> {
  const connect = await AppDataSource.initialize()

  const userRepository = connect.getRepository(User)

  const users = generateUserData(5)
  await userRepository.save(users)

  await connect.destroy()
}

function generateUserData(loopCount: number): User[] {
  const users = [...Array(loopCount)].map(() => {
    const user = new User()
    user.email = faker.internet.email()
    user.password = faker.internet.password()
    user.status = 1
    return user
  })

  return users
}

seed()
