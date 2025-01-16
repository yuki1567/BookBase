import { Router } from 'express'
import { AuthController } from '@/interfaces/controllers/AuthController'
import { AuthService } from '@/application/services/AuthService'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'

const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService)

export const authRouter = Router()

authRouter.post('/', (req, res) => authController.login(req, res))
