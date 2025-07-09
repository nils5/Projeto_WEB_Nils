import { Transaction } from '../entities/transaction'
import { TransactionRepository } from './transaction-repository-interface'
import { randomUUID } from 'crypto'

export class TransactionRepositoryInMemory implements TransactionRepository {
  private transactions: Transaction[] = []

  async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = {
      ...transaction,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.transactions.push(newTransaction)
    return newTransaction
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactions
  }

  async findById(id: string): Promise<Transaction | null> {
    const transaction = this.transactions.find((t) => t.id === id)
    return transaction || null
  }
}
