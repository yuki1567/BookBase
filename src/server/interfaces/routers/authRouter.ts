import { Router } from 'express'
import { AuthController } from '@/interfaces/controllers/AuthController'
import { AuthUseCase } from '@/application/usecases/AuthUseCase'
import { UserRepository } from '@/infrastructure/repositories/UserRepository'
import { PasswordGateway } from '@/infrastructure/gateways/PasswordGateway'
import { JwtGateway } from '@/infrastructure/gateways/JwtGateway'

const userRepository = new UserRepository()
const passwordAdapter = new PasswordGateway()
const jwtAdapter = new JwtGateway()
const authService = new AuthUseCase(userRepository, passwordAdapter, jwtAdapter)
const authController = new AuthController(authService)

export const authRouter = Router()

authRouter.post('/', (req, res) => authController.login(req, res))
