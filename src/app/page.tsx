import { LogoutButton } from '~/components/second-prisma/auth'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      {(session) ?
        <>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <LogoutButton />
        </>
        :
        <>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </>
      }
    </main>
  )
}
