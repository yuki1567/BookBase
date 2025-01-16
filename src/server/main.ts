import express from 'express'
import { authRouter } from '@/interfaces/routers/authRouter'
import { Database } from '@/infrastructure/database/Database'
import { errorMiddleware } from '@/interfaces/middlewares/errorMiddleware'

const PORT = 4000
const app = express()

const startServer = async () => {
  await Database.initialize()

  app.use(express.json())

  app.use('/api/login', authRouter)

  app.use(errorMiddleware)

  app.listen(PORT, () => {
    console.log(`server application start ${PORT}`)
  })
}

startServer()
