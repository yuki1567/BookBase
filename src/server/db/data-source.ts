import 'reflect-metadata'
import { DataSource } from 'typeorm'
import path from 'path'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'BookBase',
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, './entities/*.ts')],
  migrations: [path.join(__dirname, './migrations/*.ts')],
  subscribers: [],
  migrationsRun: false,
})

export default AppDataSource

AppDataSource.initialize()
  .then(() => {
    console.log('Inserting a new user into the database...')
  })
  .catch((error) => console.log(error))
