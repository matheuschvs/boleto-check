import express from 'express'

import { boletosRoutes } from './routes/boletos.routes'

const app = express()

app.use('/boleto', boletosRoutes)

app.listen(3333, () => console.log('Listening on port 3333'))
