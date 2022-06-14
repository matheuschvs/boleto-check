import { AppError } from "../errors/AppError"
import { VerifyBoletoService } from "./VerifyBoletoService"

let verifyBoletoService = new VerifyBoletoService()

describe('Verify Boleto', () => {
  it('should be able to return the boleto data', () => {
    const boletoData = verifyBoletoService.execute({
      digitableLine: '21290001192110001210904475617405975870000002000'
    })

    expect(boletoData).toHaveProperty('barCode')
  })

  it(
    'should not accept a digitable line containing anything other than numbers',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '2129000A1921100012109044756#7405975870000002000'
        })
      }).rejects.toBeInstanceOf(AppError)
    }
  )

  it(
    'should not accept a digitable line containing more or less than 47 or 48 numbers',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '2129000119211000121090447561740597587000000200056'
        })
      }).rejects.toBeInstanceOf(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '2129000119211000121090447561740597587000000200'
        })
      }).rejects.toBeInstanceOf(AppError)
    }
  )
})
