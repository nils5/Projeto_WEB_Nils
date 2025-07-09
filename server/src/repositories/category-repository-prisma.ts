import { prisma } from '../database/prisma'
import { Category, CategoryRepository } from './category-interface-repository'

export class CategoryRepositoryPrisma implements CategoryRepository {
  async create(name: string): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        name,
      },
    })

    return category
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await prisma.category.findUnique({
      where: {
        name,
      },
    })

    return category
  }
}
