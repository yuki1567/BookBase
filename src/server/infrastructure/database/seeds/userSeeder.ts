import { UserORM } from '../entities/UserORM'
import AppDataSource from '../data-source'
import { faker } from '@faker-js/faker'

async function seed(): Promise<void> {
  const loopCount = Number(process.argv[2])
  if (!loopCount) {
    console.error('ループ回数を引数に渡してください')
    return
  }

  const connect = await AppDataSource.initialize()

  const userRepository = connect.getRepository(UserORM)

  const users = generateUserData(loopCount)
  await userRepository.save(users)

  await connect.destroy()
}

function generateUserData(loopCount: number): UserORM[] {
  const users = [...Array(loopCount)].map(() => {
    const user = new UserORM()
    user.email = faker.internet.email()
    user.password = faker.internet.password()
    user.status = 1
    return user
  })

  return users
}

seed()
