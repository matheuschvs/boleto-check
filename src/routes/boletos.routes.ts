import { Router } from 'express'

import { VerifyBoletoController } from '../controllers/VerifyBoletoController'

const verifyBoletoController = new VerifyBoletoController()

const boletosRoutes = Router()

boletosRoutes.get('/:digitableLine', verifyBoletoController.handle)

export { boletosRoutes }
