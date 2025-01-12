import { Router } from 'express'
import { DataSource } from 'typeorm'
import { AuthController } from '@/interfaces/controllers/AuthController'
import { AuthService } from '@/application/services/AuthService'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'

export function authRouter(dbConnect: DataSource): Router {
  const userRepository = new UserRepository(dbConnect)
  const authService = new AuthService(userRepository)
  const authController = new AuthController(authService)

  const router = Router()

  router.post('/', authController.login.bind(authController))

  return router
}
