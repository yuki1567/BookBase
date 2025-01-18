export class User {
  constructor(
    private readonly _id: number,
    private readonly _email: string,
    private readonly _password: string,
  ) {}

  get id(): number {
    return this._id
  }

  get email(): string {
    return this._email
  }

  get password(): string {
    return this._password
  }
}
