import { GetBookListRequest } from '@shared/types/api/request'
import { Book } from '@/domain/Book'

export interface IBookRepository {
  findBooks(queryConditions: GetBookListRequest): Promise<Book[] | undefined>
}
