export class Book {
  constructor(
    private readonly _id: number,
    private readonly _title: string,
    private readonly _description: string | undefined,
    private readonly _author: string,
    private readonly _author_biography: string | undefined,
    private readonly _publisher: string,
    private readonly _release_date: string | undefined,
    private readonly _language: string,
    private readonly _page_count: number,
    private readonly _isbn: string | undefined,
    private readonly _dimensions: string,
    private readonly _price: number,
  ) {}

  get id(): number {
    return this._id
  }

  get title(): string {
    return this._title
  }

  get description(): string | undefined {
    return this._description
  }

  get author(): string {
    return this._author
  }

  get authorBiography(): string | undefined {
    return this._author_biography
  }

  get publisher(): string {
    return this._publisher
  }

  get releaseDate(): string | undefined {
    return this._release_date
  }

  get language(): string {
    return this._language
  }

  get pageCount(): number {
    return this._page_count
  }

  get isbn(): string | undefined {
    return this._isbn
  }

  get dimensions(): string {
    return this._dimensions
  }

  get price(): number {
    return this._price
  }
}
