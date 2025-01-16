import { DataSource } from 'typeorm'
import { ApplicationError } from '@/application/errors/ApplicationError'
import { errorCode } from '@/maps/errorMap'
import { dataSource } from '@/infrastructure/database/databaseConfig'

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
      throw ApplicationError.formatErrorCode(
        errorCode.DATABASE_CONNECTION_ERROR,
      )
    }

    return this._dbConnect
  }
}
