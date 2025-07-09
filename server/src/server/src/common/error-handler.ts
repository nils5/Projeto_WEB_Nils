import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { AppError } from './AppError'

export async function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'error',
      message: error.message,
    })
  }

  console.error(error)

  return reply.status(500).send({
    status: 'error',
    message: 'Internal server error',
  })
}
