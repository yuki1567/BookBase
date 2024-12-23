import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { resolve } from 'path'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'BookBase',
  synchronize: false,
  logging: true,
  entities: [resolve(__dirname, '../app/domain/entities/*.ts')],
  migrations: [resolve(__dirname, '../migrations/*.ts')],
  subscribers: [],
  migrationsRun: false,
})

export default AppDataSource
