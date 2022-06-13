import { Router } from 'express'

import { VerifyBoletoController } from '../controllers/verifyBoletoController'

const verifyBoletoController = new VerifyBoletoController()

const boletosRoutes = Router()

boletosRoutes.get('/:digitableLine', verifyBoletoController.handle)

export { boletosRoutes }
