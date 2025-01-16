import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { resolve } from 'path'
import { ApplicationError } from '@/application/errors/ApplicationError'
import { errorCode } from '@/maps/errorMap'

export class Database {
  private static readonly dbConnect: DataSource = new DataSource({
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'BookBase',
    synchronize: false,
    logging: true,
    entities: [resolve(__dirname, './entities/*.ts')],
    migrations: [resolve(__dirname, './migrations/migration-files/*.ts')],
    subscribers: [],
    migrationsRun: false,
  })

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
