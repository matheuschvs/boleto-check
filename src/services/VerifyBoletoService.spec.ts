import { AppError } from "../errors/AppError"
import { VerifyBoletoService } from "./VerifyBoletoService"

let verifyBoletoService = new VerifyBoletoService()
let thrownError: AppError

beforeEach(() => { thrownError = null })

describe('Check every digitable line', () => {
  it(
    'should not accept a digitable line containing anything other than numbers',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '2129000A1921100012109044756#7405975870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'The digitable line must contain only numbers'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing less than 47 or more than 48 numbers',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '2129000119211000121090447561740597587000000200056'
        })

        verifyBoletoService.execute({
          digitableLine: '2129000119211000121090447561740597587000000200'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'The digitable line must contain between 47 and 48 numbers'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )
})

describe('Check collection slip digitable line', () => {
  it(
    'should not accept a digitable line containing another product identifier',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '917700000000010936599702411310797039001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid product identifier'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing zero as segment identifier',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '807700000000010936599702411310797039001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid segment identifier'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a value identifier less than 6',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '815700000000010936599702411310797039001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid value identifier'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 10 general check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '817100000000010936599702411310797039001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid general check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 11 general check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '898900000004170001040933617624115022875216954536'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid general check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 10 first field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '817700000005010936599702411310797039001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid first field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 11 first field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '898100000009170001040933617624115022875216954536'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid first field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 10 second field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '817700000000010936599705411310797039001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid second field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 11 second field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '898100000004170001040939617624115022875216954536'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid second field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 10 third field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '817700000000010936599702411310797035001433708318'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid third field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 11 third field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '898100000004170001040933617624115029875216954536'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid third field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 10 fourth field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '817700000000010936599702411310797039001433708315'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid fourth field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong modulo 11 fourth field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '898100000004170001040933617624115022875216954539'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid fourth field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
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
        digitableLine: '876200000019392758412028235115202006000179670443'
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

      expect(data).toHaveProperty('amount', '139.27')

      const data2 = verifyBoletoService.execute({
        digitableLine: '898100000004170001040933617624115022875216954536'
      })

      expect(data2).toHaveProperty('amount', '17.00')
    }
  )

  it(
    'should not return the amount when not present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '876700000006000058412024203115202004000179670443'
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

      expect(data).toHaveProperty('barCode', '87600000001392758412022031152020000017967044')

      const data2 = verifyBoletoService.execute({
        digitableLine: '898100000004170001040933617624115022875216954536'
      })

      expect(data2).toHaveProperty('barCode', '89810000000170001040936176241150287521695453')
    }
  )
})

describe('Check bank slip digitable line', () => {
  it(
    'should not accept a digitable line containing an invalid bank code',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '99990001192110001210904475617405975870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid bank code'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing an invalid currency code',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '21200001192110001210904475617405975870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid currency code'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong first field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '21290001102110001210904475617405975870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid first field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong second field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '21290001192110001210004475617405975870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid second field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong third field check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '21290001192110001210904475617400975870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid third field check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )

  it(
    'should not accept a digitable line containing a wrong bar code check digit',
    () => {
      try {
        verifyBoletoService.execute({
          digitableLine: '21290001192110001210904475617405075870000002000'
        })
      } catch (error) {
        thrownError = error
      }

      expect(thrownError).toBeInstanceOf(AppError)
      expect(thrownError).toHaveProperty(
        'message',
        'Invalid bar code check digit'
      )
      expect(thrownError).toHaveProperty('statusCode', 400)
    }
  )
})

describe('Check bank slip response', () => {
  it(
    'should return the correct expiration date when present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405975870000002000'
      })

      expect(data).toHaveProperty('expirationDate', '2018-07-16')
    }
  )

  it(
    'should not return the expiration date when not present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405700000000002000'
      })

      expect(data).not.toHaveProperty('expirationDate')

      const data2 = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405109990000002000'
      })

      expect(data2).not.toHaveProperty('expirationDate')
    }
  )

  it(
    'should return the correct amount when present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405975870000002000'
      })

      expect(data).toHaveProperty('amount', '20.00')

      const data2 = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405200010000002000'
      })

      expect(data2).toHaveProperty('amount', '100,000,020.00')
    }
  )

  it(
    'should not return the amount when not present',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405175870000000000'
      })

      expect(data).not.toHaveProperty('amount')
    }
  )

  it(
    'should return the correct bar code',
    () => {
      const data = verifyBoletoService.execute({
        digitableLine: '21290001192110001210904475617405975870000002000'
      })

      expect(data).toHaveProperty('barCode', '21299758700000020000001121100012100447561740')
    }
  )
})
