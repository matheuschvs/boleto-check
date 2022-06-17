import { AppError } from "../errors/AppError"
import { VerifyBoletoService } from "./VerifyBoletoService"

let verifyBoletoService = new VerifyBoletoService()

describe('Check every digitable line', () => {
  it(
    'should not accept a digitable line containing anything other than numbers',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '2129000A1921100012109044756#7405975870000002000'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing less than 47 or more than 48 numbers',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '2129000119211000121090447561740597587000000200056'
        })
      }).toThrow(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '2129000119211000121090447561740597587000000200'
        })
      }).toThrow(AppError)
    }
  )
})

describe('Check collection slip digitable line', () => {
  it(
    'should not accept a digitable line containing another product identifier',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '917700000000010936599702411310797039001433708318'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing zero as segment identifier',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '807700000000010936599702411310797039001433708318'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing a value identifier less than 6',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '815700000000010936599702411310797039001433708318'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing a wrong general check digit',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '817100000000010936599702411310797039001433708318'
        })
      }).toThrow(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '898900000004170001040933617624115022875216954536'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing a wrong first field check digit',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '817700000005010936599702411310797039001433708318'
        })
      }).toThrow(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '898100000009170001040933617624115022875216954536'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing a wrong second field check digit',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '817700000000010936599705411310797039001433708318'
        })
      }).toThrow(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '898100000004170001040939617624115022875216954536'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing a wrong third field check digit',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '817700000000010936599702411310797035001433708318'
        })
      }).toThrow(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '898100000004170001040933617624115029875216954536'
        })
      }).toThrow(AppError)
    }
  )

  it(
    'should not accept a digitable line containing a wrong fourth field check digit',
    () => {
      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '817700000000010936599702411310797039001433708315'
        })
      }).toThrow(AppError)

      expect(() => {
        verifyBoletoService.execute({
          digitableLine: '898100000004170001040933617624115022875216954539'
        })
      }).toThrow(AppError)
    }
  )
})

describe('Check collection slip response', () => {
  it(
    'should return the correct expiration date when present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '876000000011392758412028203115202004000179670443'
      })

      expect(data).toHaveProperty('expirationDate', '2022-03-11')
    }
  )

  it(
    'should not return the expiration date when not present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '876000000011392758412028235115202004000179670443'
      })

      expect(data).not.toHaveProperty('expirationDate')

      const data2 = verifyBoletoService.execute({
        digitableLine: '898100000004170001040933617624115022875216954536'
      })

      expect(data2).not.toHaveProperty('expirationDate')
    }
  )

  it(
    'should return the correct amount when present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '876000000011392758412028203115202004000179670443'
      })

      expect(data).toHaveProperty('amount', 139.27)

      const data2 = verifyBoletoService.execute({
        digitableLine: '898100000004170001040933617624115022875216954536'
      })

      expect(data2).toHaveProperty('amount', 17.00)
    }
  )

  it(
    'should not return the amount when not present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '876000000001000058412028203115202004000179670443'
      })

      expect(data).not.toHaveProperty('amount')
    }
  )

  it(
    'should return the correct bar code',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '876000000011392758412028203115202004000179670443'
      })

      expect(data).toHaveProperty('barCode', '876000000013927584120220311520200000179670443')

      const data2 = verifyBoletoService.execute({
        digitableLine: '898100000004170001040933617624115022875216954536'
      })

      expect(data2).toHaveProperty('barCode', '89810000000170001040936176241150287521695453')
    }
  )
})
