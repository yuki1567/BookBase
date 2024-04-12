import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
const entities = [
  User,
]

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "password",
  database: "BookBase",
  synchronize: false,
  logging: false,
  entities: entities,
  migrations: [],
  subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Inserting a new user into the database...")
  })
  .catch((error) => console.log(error))