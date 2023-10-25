import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { LogoutButton } from '~/components/auth-components/logButtons'
import { Typography } from '~/components/ui/typography'
import { authOptions } from '~/lib/auth-options'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <>
      <Typography>Super Secret Dashboard</Typography>
      <LogoutButton />
    </>
  )
}
