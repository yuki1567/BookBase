import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'
import { DataSource } from 'typeorm'
import { AuthService } from '@/application/AuthService'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'

export function authRouter(dbConnect: DataSource): Router {
  const userRepository = new UserRepository(dbConnect)
  const authService = new AuthService(userRepository)
  const authController = new AuthController(authService)

  const router = Router()

  router.post('/', authController.login.bind(authController))

  return router
}
