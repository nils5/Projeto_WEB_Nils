import Fastify from 'fastify'
import cors from '@fastify/cors'
import { categoriesRoutes } from './routes/categories-route'

const app = Fastify()

app.register(cors, {
  origin: '*',
})

app.register(categoriesRoutes, {
  prefix: '/categories',
})

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP server running on http://localhost:3333')
})

import { errorHandler } from './common/error-handler'

app.setErrorHandler(errorHandler)
