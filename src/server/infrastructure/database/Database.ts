import { DataSource } from 'typeorm'
import { ApplicationError } from '@/application/errors/ApplicationError'
import { errorCode } from '@/maps/errorMap'
import { dataSource } from '@/infrastructure/database/databaseConfig'

export class Database {
  private static readonly dbConnect: DataSource = dataSource

  public static async initialize(): Promise<DataSource> {
    if (!this.dbConnect.isInitialized) {
      await this.dbConnect.initialize()
    }

    return this.dbConnect
  }

  public static getDbConnect(): DataSource {
    if (!this.dbConnect.isInitialized) {
      throw ApplicationError.formatErrorCode(
        errorCode.DATABASE_CONNECTION_ERROR,
      )
    }

    return this.dbConnect
  }
}
