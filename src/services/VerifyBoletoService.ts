import { AppError } from "../errors/AppError";

interface IRequest {
  digitableLine: string;
}

class VerifyBoletoService {
  execute({ digitableLine }: IRequest) {
    if (!digitableLine.match(/^\d+$/)) {
      throw new AppError('The digitable line must contain only numbers')
    }

    if (digitableLine.length > 48 || digitableLine.length < 47) {
      throw new AppError('The digitable line must contain between 47 and 48 numbers')
    }
  }
}


export { VerifyBoletoService }
