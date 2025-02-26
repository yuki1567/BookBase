import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { resolve } from 'path'

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'BookBase',
  synchronize: false,
  logging: true,
  entities: [resolve(__dirname, '../database/entities/*.ts')],
  migrations: [
    resolve(__dirname, '../database/migrations/migration-files/*.ts'),
  ],
  subscribers: [],
  migrationsRun: false,
})
