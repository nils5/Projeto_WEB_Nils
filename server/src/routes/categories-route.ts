import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { CreateCategoryController } from '../controllers/create-category-controller'

export async function categoriesRoutes(app: FastifyInstance) {
  const createCategoryController = new CreateCategoryController()

  app.post('/', async (request, reply) => {
    const createCategoryBodySchema = z.object({
      name: z.string(),
    })

    const { name } = createCategoryBodySchema.parse(request.body)

    const category = await createCategoryController.handle({ name })

    return reply.status(201).send(category)
  })
}
