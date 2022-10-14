import Router from '@koa/router'
import { PrismaClient } from '@prisma/client'
export const router = new Router()

const prisma = new PrismaClient()
const users = []

router.get('/', async ctx => {
    ctx.body = users
  })
  
router.post('/users', async ctx => {
    const user = {
      username: ctx.request.body.username
    }

    users.push(user)

    ctx.body = user
  })