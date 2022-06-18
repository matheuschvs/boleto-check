import { Request, Response } from 'express'

import { VerifyBoletoService } from '../services/VerifyBoletoService'

class VerifyBoletoController {
  handle(request: Request, response: Response) {
    const { digitableLine } = request.params

    const verifyBoletoService = new VerifyBoletoService()

    const resObject = verifyBoletoService.execute({ digitableLine })

    return response.json(resObject)
  }
}

export { VerifyBoletoController }
