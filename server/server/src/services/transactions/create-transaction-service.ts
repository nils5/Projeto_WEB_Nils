import { Transaction } from '../../../entities/transaction'
import { TransactionRepository } from '../../../repositories/transaction-repository-interface'
import { randomUUID } from 'crypto'

interface CreateTransactionRequest {
  title: string
  amount: number
  type: 'income' | 'outcome'
  categoryId: string
}

export class CreateTransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute({
    title,
    amount,
    type,
    categoryId,
  }: CreateTransactionRequest): Promise<Transaction> {
    if (!['income', 'outcome'].includes(type)) {
      throw new Error('Invalid transaction type.')
    }

    const transaction: Transaction = {
      id: randomUUID(),
      title,
      amount,
      type,
      categoryId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return await this.transactionRepository.create(transaction)
  }
}
