import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "~/lib/prisma";
import { compare } from "bcrypt";

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt'
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Sign in',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'email',
//           placeholder: 'hello@example.com'
//         },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           return null
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email
//           }
//         })

//         if (!user) {
//           return null
//         }

//         const isPasswordValid = await compare(
//           credentials.password,
//           user.password
//         )

//         if (!isPasswordValid) {
//           return null
//         }

//         return {
//           id: user.id + '',
//           email: user.email,
//           name: user.name,
//         }
//       }
//     })
//   ],
//   callbacks: {
//     session: ({ session, token }) => {
//       console.log('Session Callback', { session, token })
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id,
//         }
//       }
//     },
//     jwt: ({ token, user }) => {
//       console.log('JWT Callback', { token, user })
//       if (user) {
//         const u = user as unknown as any
//         return {
//           ...token,
//           id: u.id,
//         }
//       }
//       return token
//     }
//   }
// }

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      // @ts-ignore
      async authorize(credentials, _) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
};
