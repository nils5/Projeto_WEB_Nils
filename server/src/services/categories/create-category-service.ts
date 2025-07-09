import { randomUUID } from 'crypto'
import { CategoryRepository, Category } from '../../repositories/category-interface-repository'

interface CreateCategoryRequest {
  name: string
}

export class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute({ name }: CreateCategoryRequest): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists.')
    }

    const category = await this.categoryRepository.create(name)

    return category
  }
}
