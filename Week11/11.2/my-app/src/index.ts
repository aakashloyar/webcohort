import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export interface Env {
  DATABASE_URL:string
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate())

    const response = await prisma.user.create({
      data: {
        name:'String',
        email:'String',
	      password: 'String'
      },
    })

    console.log(JSON.stringify(response))

    return new Response(`request method: ${request.method}!`)
  }
}
