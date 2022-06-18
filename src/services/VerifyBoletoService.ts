import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { AppError } from '../errors/AppError'
import { formatNumber } from '../utils/formatNumber';
import { banks } from '../database/banks';

interface IRequest {
  digitableLine: string;
}

interface IBoletoData {
  expirationDate?: string;
  amount?: string;
  barCode: string;
}

dayjs.extend(customParseFormat)
dayjs.extend(isBetween)

class VerifyBoletoService {
  execute({ digitableLine }: IRequest): IBoletoData {
    if (!digitableLine.match(/^\d+$/)) {
      throw new AppError('The digitable line must contain only numbers')
    }

    if (digitableLine.length > 48 || digitableLine.length < 47) {
      throw new AppError('The digitable line must contain between 47 and 48 numbers')
    }

    if (digitableLine.length === 47) {
      this.checkBankSlipDigitableLine(digitableLine)
      return this.getBankSlipData(digitableLine)
    }

    const valueId = this.checkCollectionSlipDigitableLine(digitableLine)
    return this.getCollectionSlipData(digitableLine, valueId)
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
    const bankCodeLine = digitableLine.substring(0, 3)

    if (banks.filter(bank => bank.code === +bankCodeLine).length === 0) {
      throw new AppError('Invalid bank code')
    }

    if (digitableLine[3] !== '9') {
      throw new AppError('Invalid currency code')
    }

    const firstFieldCheckDigitCheckLine = digitableLine.substring(0, 9)

    if (this.getCheckDigit(firstFieldCheckDigitCheckLine) !== +digitableLine[9]) {
      throw new AppError('Invalid first field check digit')
    }

    const secondFieldCheckDigitCheckLine = digitableLine.substring(10, 20)

    if (this.getCheckDigit(secondFieldCheckDigitCheckLine) !== +digitableLine[20]) {
      throw new AppError('Invalid second field check digit')
    }

    const thirdFieldCheckDigitCheckLine = digitableLine.substring(21, 31)

    if (this.getCheckDigit(thirdFieldCheckDigitCheckLine) !== +digitableLine[31]) {
      throw new AppError('Invalid third field check digit')
    }

    const barCodeCheckDigitCheckLine = digitableLine.substring(0, 4) +
      digitableLine.substring(33, 47) +
      digitableLine.substring(4, 9) +
      secondFieldCheckDigitCheckLine +
      thirdFieldCheckDigitCheckLine

    if (this.getCheckDigit(barCodeCheckDigitCheckLine, 11, 'bank') !== +digitableLine[32]) {
      throw new AppError('Invalid bar code check digit')
    }
  }

  getBankSlipData(digitableLine: string) {
    const boletoData = {} as IBoletoData

    const expirationDateFactor = +digitableLine.substring(33, 37)

    if (expirationDateFactor >= 1000) {
      const expirationDate = this.getExpirationDateByFactor(expirationDateFactor)
      boletoData.expirationDate = expirationDate
    }

    let amount = 0

    if (expirationDateFactor >= 1000) {
      amount = +digitableLine.substring(37, 47)
    } else {
      amount = +digitableLine.substring(33, 47)
    }

    if (amount > 0) {
      boletoData.amount = formatNumber(amount)
    }

    const barCode = digitableLine.substring(0, 4) +
      digitableLine.substring(32, 47) +
      digitableLine.substring(4, 9) +
      digitableLine.substring(10, 20) +
      digitableLine.substring(21, 31)

    boletoData.barCode = barCode

    return boletoData
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

    return valueId
  }

  getCollectionSlipData(digitableLine: string, valueId: number) {
    const boletoData = {} as IBoletoData

    if (valueId === 6 || valueId === 8) {
      const amountLine = digitableLine.substring(4, 11) +
        digitableLine.substring(12, 16)
      const amount = +amountLine

      if (amount !== 0) {
        boletoData.amount = formatNumber(amount)
      }
    }

    const smallIdDateLine = digitableLine.substring(20, 23) +
      digitableLine.substring(24, 29)
    const smallIdDate = dayjs(smallIdDateLine, 'YYYYMMDD', true)

    if (smallIdDate.isValid() &&
      smallIdDate.isBetween('1997-01-01', '3000-01-01', 'day', '[]')
    ) {
      boletoData.expirationDate = smallIdDate.format('YYYY-MM-DD')
    } else {
      const longIdDateLine = digitableLine.substring(25, 33)
      const longIdDate = dayjs(longIdDateLine, 'YYYYMMDD', true)

      if (longIdDate.isValid() &&
        longIdDate.isBetween('1997-01-01', '3000-01-01', 'day', '[]')
      ) {
        boletoData.expirationDate = longIdDate.format('YYYY-MM-DD')
      }
    }

    const barCode = digitableLine.substring(0, 11) +
      digitableLine.substring(12, 23) +
      digitableLine.substring(24, 35) +
      digitableLine.substring(36, 47)

    boletoData.barCode = barCode

    return boletoData
  }
}


export { VerifyBoletoService }
