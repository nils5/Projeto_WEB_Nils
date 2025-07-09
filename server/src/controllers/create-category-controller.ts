import { CreateCategoryService } from '../services/categories/create-category-service'

interface CreateCategoryRequest {
  name: string
}

export class CreateCategoryController {
  async handle({ name }: CreateCategoryRequest) {
    const createCategoryService = new CreateCategoryService()

    const category = await createCategoryService.execute({ name })

    return category
  }
}
