import { IBookRepository } from '@/application/repositories/IBookRepository'
import { Book } from '@/domain/Book'
import { GetBookListRequest } from '@shared/types/api/request'
import { Database } from '@/infrastructure/database/Database'
import { BookORM } from '../database/entities/BookORM'

export class BookRepository implements IBookRepository {
  public async findBooks(
    queryConditions: GetBookListRequest,
  ): Promise<Book[] | undefined> {
    const dbConnect = Database.getDbConnect()
    const bookRepository = await dbConnect.getRepository(BookORM)

    const array: Record<string, string | string[]> = {
      id: 'id',
      title: 'title',
      description: 'description',
      author: 'author',
      authorBiography: 'author_biography',
      publisher: 'publisher',
      releaseDate: 'release_date',
      language: 'language',
      pageCount: 'page_count',
      isbn13: 'isbn_13',
      dimensions: ['width', 'height'],
      price: 'price',
    }

    const select = Object.fromEntries(
      queryConditions.filters.select
        .flatMap((filed) => {
          return array[filed] ?? []
        })
        .map((column) => {
          return [column, true]
        }),
    )
    const order = Object.fromEntries(
      queryConditions.sort.map((filed, order) => {
        return [filed, order]
      }),
    )

    const bookEntity = await bookRepository.find({
      select: select,
      where: queryConditions.filters.where,
      order: order,
      skip: queryConditions.pagination.offset,
      take: queryConditions.pagination.limit,
    })

    if (!bookEntity) {
      return undefined
    }
  }
}
