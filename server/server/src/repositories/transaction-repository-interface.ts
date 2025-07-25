import { Transaction } from '../entities/transaction'

export interface TransactionRepository {
  create(transaction: Transaction): Promise<Transaction>
  findAll(): Promise<Transaction[]>
  findById(id: string): Promise<Transaction | null>
}
