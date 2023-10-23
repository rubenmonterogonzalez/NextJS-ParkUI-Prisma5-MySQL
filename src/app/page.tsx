import { LoginButton, LogoutButton } from '~/components/second-prisma/auth'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
      {(session) ?
        <LoginButton /> :
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      }
    </main>
  )
}
