import { UserORM } from '../entities/UserORM'
import AppDataSource from '../data-source'
import { faker } from '@faker-js/faker'
import { PasswordAdapter } from '@/infrastructure/PasswordAdapter'

async function seed(): Promise<void> {
  const loopCount = Number(process.argv[2])
  if (!loopCount) {
    console.error('ループ回数を引数に渡してください')
    return
  }

  const connect = await AppDataSource.initialize()

  const userRepository = connect.getRepository(UserORM)

  const users = await generateUserData(loopCount)
  await userRepository.save(users)

  await connect.destroy()
}

async function generateUserData(loopCount: number): Promise<UserORM[]> {
  const users = await Promise.all(
    [...Array(loopCount)].map(async () => {
      const user = new UserORM()
      user.email = faker.internet.email()
      const password = 'password'
      user.password = await PasswordAdapter.hash(password)
      user.status = 1
      return user
    }),
  )

  return users
}

seed()
