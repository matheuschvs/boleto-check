import express from 'express'
import swagger from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import { errorHandler } from './middlewares/errorHandler'

import { boletosRoutes } from './routes/boletos.routes'

const app = express()

app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile))

app.use('/boleto', boletosRoutes)

app.use(errorHandler)

export { app }
