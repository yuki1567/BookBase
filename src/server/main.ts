import express from 'express'
import { authRouter } from '@/interfaces/routers/authRouter'
import { Database } from './infrastructure/database/Database'

const PORT = 4000
const app = express()

const startServer = async () => {
  Database.initialize()

  app.use(express.json())

  app.listen(PORT, () => {
    console.log(`server application start ${PORT}`)
  })

  app.use('/api/login', authRouter)
}

startServer()
