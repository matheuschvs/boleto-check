import { Request, Response } from 'express'

import { verifyBoletoService } from '../services/VerifyBoletoService'

const verifyBoletoController = (request: Request, response: Response) => {
  const { digitableLine } = request.params

  const resObject = verifyBoletoService.execute({ digitableLine })

  return response.json(resObject)
}

export { verifyBoletoController }
