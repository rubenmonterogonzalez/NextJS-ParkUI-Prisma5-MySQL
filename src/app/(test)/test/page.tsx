import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function test() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: 'Robert',
      email: 'robert@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

test()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

