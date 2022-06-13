import { Router } from 'express'

import { verifyBoletoController } from '../controllers/verifyBoletoController'

const boletosRoutes = Router()

boletosRoutes.get('/:digitableLine', verifyBoletoController)

export { boletosRoutes }
