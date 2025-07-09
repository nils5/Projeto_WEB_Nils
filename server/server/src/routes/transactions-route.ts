import { FastifyInstance } from 'fastify'
import { CreateTransactionController } from '../controllers/create-transaction-controller'

export async function transactionsRoutes(app: FastifyInstance) {
  const createTransactionController = new CreateTransactionController()

  app.post('/', async (request, reply) => {
    return createTransactionController.handle(request, reply)
  })
}
