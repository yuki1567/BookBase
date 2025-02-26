import { dataSource } from '@/infrastructure/config/databaseConfig'
import { BookORM } from '@/infrastructure/database/entities/BookORM'
import { faker } from '@faker-js/faker'

async function seed(): Promise<void> {
  const loopCount = Number(process.argv[2])
  if (!loopCount) {
    console.error('ループ回数を引数に渡してください')
    return
  }

  const connect = await dataSource.initialize()

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
    book.author = faker.book.author()
    book.author_biography = faker.person.bio()
    book.publisher = faker.book.publisher()
    book.release_date = faker.date.past()
    book.language = faker.location.language().name
    book.page_count = faker.number.int(10000)
    book.isbn_13 = faker.commerce.isbn(13).replace(/-/g, '')
    book.width = faker.number.float({ min: 0, max: 99, fractionDigits: 1 })
    book.height = faker.number.float({ min: 0, max: 99, fractionDigits: 1 })
    book.price = Number(faker.commerce.price({ min: 100, max: 10000, dec: 0 }))
    book.status = 1
    return book
  })

  return books
}

seed()
