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

  getCheckDigit(line: string, module: 10 | 11) {
    let currentFactor = 2
    let product = ''
    let sum = 0

    for (let i = line.length - 1; i >= 0; i -= 1) {
      if (module === 10) {
        product += currentFactor * +line[i]
        currentFactor = currentFactor === 2 ? 1 : 2
      } else {
        sum += currentFactor * +line[i]
        currentFactor = currentFactor === 9 ? 2 : currentFactor + 1
      }
    }

    let result = 0

    if (module === 10) {
      sum = product.split('').reduce((acc, n) => acc += +n, 0)
      result = 10 - (sum % 10)
      return result === 10 ? 0 : result
    }

    result = 11 - (sum % 11)
    return result === 10 || result === 11 ? 0 : result
  }
}


export { VerifyBoletoService }
