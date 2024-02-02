import { PrismaClient } from '@prisma/client'

// Instantiate Prisma Client
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const posts = await prisma.post.findMany()

    return {
        statusCode: 200,
        body: posts
    }
})