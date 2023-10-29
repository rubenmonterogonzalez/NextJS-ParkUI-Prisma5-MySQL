import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { LogoutButton } from '~/components/auth-components/logButtons'
import TaskCard from '~/components/task-components/task-card'
import { Button } from '~/components/ui/button'
import { Typography } from '~/components/ui/typography'
import { authOptions } from '~/lib/auth-options'
import { prisma } from '~/lib/prisma'
import { css } from "~/styled-system/css";


export default async function Dashboard() {
  //Keep out from dashboard
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  //GET loadTasks
  async function loadTasks() {
    return await prisma?.task.findMany()
  }

  const tasks = await loadTasks();

  return (
    <>
      <LogoutButton />
      <Typography>Super Secret Dashboard</Typography>
      <Typography>All the Tasks</Typography>
      <Button>
        <Link href={'/dashboard/new'}>New Task</Link>
      </Button>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1',
          lg: {
            gridTemplateColumns: '2',
          },
          xl: {
            gridTemplateColumns: '3',
          },
          gap: '40px',
          margin: '40px',
        })}>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>
  )
}
