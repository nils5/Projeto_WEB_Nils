export interface Category {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface CategoryRepository {
  create(name: string): Promise<Category>
  findByName(name: string): Promise<Category | null>
}
