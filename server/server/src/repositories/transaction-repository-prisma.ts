import { prisma } from '../database/prisma'
import { Transaction } from '../entities/transaction'
import { TransactionRepository } from './transaction-repository-interface'

export class TransactionRepositoryPrisma implements TransactionRepository {
  async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = await prisma.transaction.create({
      data: {
        title: transaction.title,
        amount: transaction.amount,
        type: transaction.type,
        categoryId: transaction.categoryId,
      },
    })

    return newTransaction
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await prisma.transaction.findMany()
    return transactions
  }

  async findById(id: string): Promise<Transaction | null> {
    const transaction = await prisma.transaction.findUnique({
      where: { id },
    })

    return transaction
  }
}
