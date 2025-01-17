import { DataSource } from 'typeorm'
import { ApplicationError } from '@/application/errors/ApplicationError'
import { dataSource } from '@/infrastructure/config/databaseConfig'

export class Database {
  private static readonly _dbConnect: DataSource = dataSource

  public static async initialize(): Promise<DataSource> {
    if (!this._dbConnect.isInitialized) {
      await this._dbConnect.initialize()
    }

    return this._dbConnect
  }

  public static getDbConnect(): DataSource {
    if (!this._dbConnect.isInitialized) {
      throw ApplicationError.formatErrorCode('DATABASE_ERROR')
    }
    return this._dbConnect
  }
}
