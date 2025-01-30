import { Book } from '@/domain/Book'
import { IBookRepository } from '../repositories/IBookRepository'
import { GetBookListRequest } from '../../../shared/types/api/request'

export class GetBookListUseCase {
  constructor(private readonly _bookRepository: IBookRepository) {}

  public async getBookList(
    queryConditions: GetBookListRequest,
  ): Promise<Book[] | undefined> {
    const books = await this._bookRepository.findBooks(queryConditions)

    return books
  }
}
