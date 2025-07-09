export class Transaction {
  id: string
  title: string
  amount: number
  type: 'income' | 'outcome'
  categoryId: string
  createdAt: Date
  updatedAt: Date
}
