import { Category, CategoryRepository } from './category-interface-repository'
import { randomUUID } from 'crypto'

export class CategoryRepositoryInMemory implements CategoryRepository {
  private categories: Category[] = []

  async create(name: string): Promise<Category> {
    const category: Category = {
      id: randomUUID(),
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.categories.push(category)
    return category
  }

  async findByName(name: string): Promise<Category | null> {
    const category = this.categories.find((cat) => cat.name === name)
    return category || null
  }
}
