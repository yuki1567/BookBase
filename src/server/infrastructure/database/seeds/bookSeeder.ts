import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { BookORM } from '../entities/BookORM'
import { faker } from '@faker-js/faker'
import { resolve } from 'path'

async function seed(): Promise<void> {
  const loopCount = Number(process.argv[2])
  if (!loopCount) {
    console.error('ループ回数を引数に渡してください')
    return
  }

  const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'BookBase',
    synchronize: false,
    logging: true,
    entities: [resolve(__dirname, './entities/*.ts')],
    migrations: [resolve(__dirname, './migrations/migration-files/*.ts')],
    subscribers: [],
    migrationsRun: false,
  })

  const connect = await AppDataSource.initialize()

  const bookRepository = connect.getRepository(BookORM)

  const books = generateBookData(loopCount)
  await bookRepository.save(books)

  await connect.destroy()
}

function generateBookData(loopCount: number): BookORM[] {
  const books = [...Array(loopCount)].map(() => {
    const book = new BookORM()
    book.title = faker.book.title()
    book.description = faker.commerce.productDescription()
    book.price = Number(faker.commerce.price({ min: 100, max: 10000, dec: 0 }))
    book.status = 1
    return book
  })

  return books
}

seed()
