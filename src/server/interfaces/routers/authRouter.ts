import { Router } from 'express'
import { AuthController } from '@/interfaces/controllers/AuthController'
import { AuthUseCase } from '@/application/usecases/AuthUseCase'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'
import { PasswordAdapter } from '@/infrastructure/adapters/PasswordAdapter'
import { JwtAdapter } from '@/infrastructure/adapters/JwtAdapter'

const userRepository = new UserRepository()
const passwordAdapter = new PasswordAdapter()
const jwtAdapter = new JwtAdapter()
const authService = new AuthUseCase(userRepository, passwordAdapter, jwtAdapter)
const authController = new AuthController(authService)

export const authRouter = Router()

authRouter.post('/', (req, res) => authController.login(req, res))
