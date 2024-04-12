import { AppDataSource } from "../db/data-source"
import { User } from "../db/entities/User"

AppDataSource.initialize().then(async () => {
  const UserEmail = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .select("user.user_email")
    .getOne()

  console.log("MAIL", UserEmail)
}).catch(error => console.log(error))