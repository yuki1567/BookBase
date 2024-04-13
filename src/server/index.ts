import express from 'express'
import { AppDataSource } from './db/data-source'
import { User } from './db/entities/User'

const PORT = 5000

const app = express()

app.get('/api/hello', async (req, res) => {
  res.json({
    message: 'HELL!!!!!!!!!!!!!!!!!',
  })
})

app.get('/api/user', async (req, res) => {
  const UserEmail = await AppDataSource.getRepository(User)
    .createQueryBuilder('user')
    .select('user.user_email')
    .getOne()

  res.json({
    mail: UserEmail,
  })
})

app.listen(PORT, () => {
  console.log('JFIEJIFJEOFJIO')
})
