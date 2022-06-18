import request from 'supertest'

import { app } from '../app'

describe('Verify boleto controller', () => {
  it('should not accept a wrong digitable line', async () => {
    await request(app)
      .get('/boleto/xxxxxx')
      .expect(400)

    await request(app)
      .get('/boleto/898900000004170001040933617624115022875216954536')
      .expect(400)
  })

  it('should be able to return the correct data', async () => {
    const response1 = await request(app)
      .get('/boleto/03399742895290000000202842801041673540000000500')

    expect(response1.status).toBe(200)
    expect(response1.body).toHaveProperty('amount', '5.00')
    expect(response1.body).toHaveProperty('expirationDate', '2017-11-25')

    const response2 = await request(app)
      .get('/boleto/10494575734100020004200000005629160000000017000')

    expect(response2.status).toBe(200)
    expect(response2.body).toHaveProperty('amount', '170.00')
    expect(response2.body).toHaveProperty('expirationDate', '2014-03-12')

    const response3 = await request(app)
      .get('/boleto/826700000001264002780015189902212100008601000022')

    expect(response3.status).toBe(200)
    expect(response3.body).toHaveProperty('amount', '26.40')
    expect(response3.body).not.toHaveProperty('expirationDate')

    const response4 = await request(app)
      .get('/boleto/23791111036000000010301000222206148622000000000')

    expect(response4.status).toBe(200)
    expect(response4.body).toHaveProperty('amount', '20,000,000.00')
    expect(response4.body).toHaveProperty('expirationDate', '2011-01-29')
  })
})
