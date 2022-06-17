import dayjs from 'dayjs'

import { AppError } from '../errors/AppError'

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

    if (digitableLine.length === 47) {
      this.checkBankSlipDigitableLine(digitableLine)
    } else {
      this.checkCollectionSlipDigitableLine(digitableLine)
    }
  }

  getCheckDigit(
    line: string,
    module: 10 | 11 = 10,
    boletoType: 'bank' | 'collection' = 'collection'
  ) {
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
    if (boletoType === 'collection') {
      return result === 10 || result === 11 ? 0 : result
    }

    return result === 10 || result === 11 || result === 0 ? 1 : result
  }

  getExpirationDateByFactor(factor: number) {
    let currentFactor = 4800
    let currentDate = dayjs('2010-11-28')

    for (let i = 0; i < 8999; i += 1) {
      if (factor === currentFactor) {
        break
      }

      if (currentFactor === 9999) {
        currentFactor = 1000
      } else {
        currentFactor += 1
      }

      currentDate = currentDate.add(1, 'day')
    }

    return currentDate.format('YYYY-MM-DD')
  }

  checkBankSlipDigitableLine(digitableLine: string) {

  }

  checkCollectionSlipDigitableLine(digitableLine: string) {
    if (digitableLine[0] !== '8') {
      throw new AppError('Invalid product identifier')
    }

    if (digitableLine[1] === '0') {
      throw new AppError('Invalid segment identifier')
    }

    const valueId = +digitableLine[2]

    if (valueId < 6) {
      throw new AppError('Invalid value identifier')
    }

    const firstFieldCheckDigitCheckLine = digitableLine.substring(0, 11)
    const secondFieldCheckDigitCheckLine = digitableLine.substring(12, 23)
    const thirdFieldCheckDigitCheckLine = digitableLine.substring(24, 35)
    const fourthFieldCheckDigitCheckLine = digitableLine.substring(36, 47)

    const generalCheckDigitCheckLine = digitableLine.substring(0, 3) +
      digitableLine.substring(4, 11) +
      secondFieldCheckDigitCheckLine +
      thirdFieldCheckDigitCheckLine +
      fourthFieldCheckDigitCheckLine

    const module = valueId > 7 ? 11 : 10

    if (this.getCheckDigit(generalCheckDigitCheckLine, module) !== +digitableLine[3]) {
      throw new AppError('Invalid general check digit')
    }

    if (this.getCheckDigit(firstFieldCheckDigitCheckLine, module) !== +digitableLine[11]) {
      throw new AppError('Invalid first field check digit')
    }

    if (this.getCheckDigit(secondFieldCheckDigitCheckLine, module) !== +digitableLine[23]) {
      throw new AppError('Invalid second field check digit')
    }

    if (this.getCheckDigit(thirdFieldCheckDigitCheckLine, module) !== +digitableLine[35]) {
      throw new AppError('Invalid third field check digit')
    }

    if (this.getCheckDigit(fourthFieldCheckDigitCheckLine, module) !== +digitableLine[47]) {
      throw new AppError('Invalid fourth field check digit')
    }
  }
}


export { VerifyBoletoService }
