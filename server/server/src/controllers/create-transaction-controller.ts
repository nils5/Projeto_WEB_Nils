import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateTransactionService } from '../services/transactions/create-transaction-service'
import { TransactionRepositoryPrisma } from '../../repositories/transaction-repository-prisma'

export class CreateTransactionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, amount, type, categoryId } = request.body as {
      title: string
      amount: number
      type: 'income' | 'outcome'
      categoryId: string
    }

    const transactionRepository = new TransactionRepositoryPrisma()
    const createTransactionService = new CreateTransactionService(transactionRepository)

    try {
      const transaction = await createTransactionService.execute({
        title,
        amount,
        type,
        categoryId,
      })

      return reply.status(201).send(transaction)
    } catch (error) {
      return reply.status(400).send({ error: error.message })
    }
  }
}
