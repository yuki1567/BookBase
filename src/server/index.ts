import express from 'express'
import AppDataSource from '@/config/data-source'
import { User } from '@/app/domain/entities/User'

const PORT = 5000
const app = express()

const startServer = async () => {
  const connect = await AppDataSource.initialize()

  app.listen(PORT, () => {
    console.log('Start')
  })

  app.get('/api/hello', async (req, res) => {
    res.json({
      message: 'HELL!!!!!!!!!!!!!!!!!',
    })
  })

  app.get('/api/user', async (req, res) => {
    const UserEmail = await connect
      .getRepository(User)
      .createQueryBuilder('users')
      .select('users.email')
      .getOne()

    res.json({
      mail: UserEmail.email,
    })
  })
}

startServer()
