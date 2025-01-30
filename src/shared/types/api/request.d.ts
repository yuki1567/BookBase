type getBaseRequest<T, U> = {
  filters: {
    select: T[]
    where: U
  }
  pagination: {
    offset: number
    limit: number
  }
  sort: {
    field: string
    order: 'asc' | 'desc'
  }[]
}

export type LoginRequest = {
  email: string
  password: string
}

type SelectBookList =
  | 'id'
  | 'title'
  | 'description'
  | 'author'
  | 'authorBiography'
  | 'publisher'
  | 'releaseDate'
  | 'language'
  | 'pageCount'
  | 'isbn13'
  | 'dimensions'
  | 'price'

type whereBookList = {
  id: number
  title: string
  author: string
}

export type GetBookListRequest = getBaseRequest<SelectBookList, whereBookList>
