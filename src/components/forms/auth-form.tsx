"use client";
import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "~/components/auth-components/loading-components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Typography } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { css } from "~/styled-system/css";

type FormType = "login" | "register";

export default function AuthForm({ type }: { type: FormType }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);

    if (type === "login") {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const result = await signIn("credentials", {
        redirect: false,
        name,
        email,
        password,
      });

      if (result) {
        if (result.error) {
          setLoading(false);
          toast.error(result.error);
        } else {
          router.refresh();
          router.push("/dashboard");
        }
      }
    } else {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (response.status === 200) {
          toast.success("Account created! Redirecting to login...");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          const { error } = await response.json();
          toast.error(error);
        }
      } catch (error) {
        toast.error("An error occurred while registering.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={css({
        display: 'flex',
        flexDir: 'column',
        mt: '4',
        mb: '4',
        bgColor: 'gray.50',
        pl: '4',
        pr: '4',
        pt: '8',
        pb: '8',
        sm: { pl: '16', pr: '16' },
      })}
    >
      {type === "register" && (
        <>
          <Label
            htmlFor="name"
            className={css({
              display: 'block',
              fontSize: 'xs',
              lineHeight: 'xs',
              color: 'gray.600',
              textTransform: 'uppercase',
            })}
          >
            Username
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={css({
              mt: '1',
              display: 'block',
              w: 'full',
              appearance: 'none',
              rounded: 'md',
              borderWidth: '1px',
              borderColor: 'gray.300',
              pl: '3',
              pr: '3',
              pt: '2',
              pb: '2',
              color: 'gray.400',
              shadow: 'sm',
              _focus: { borderColor: 'black', ring: 'none', ringOffset: 'none' },
              sm: { fontSize: 'sm', lineHeight: 'sm' },
            })}
          />
        </>
      )}
      <Label
        htmlFor="email"
        className={css({
          display: 'block',
          fontSize: 'xs',
          lineHeight: 'xs',
          color: 'gray.600',
          textTransform: 'uppercase',
        })}
      >
        Email Address
      </Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="panic@thedis.co"
        autoComplete="email"
        required
        className={css({
          mt: '1',
          display: 'block',
          w: 'full',
          appearance: 'none',
          rounded: 'md',
          borderWidth: '1px',
          borderColor: 'gray.300',
          pl: '3',
          pr: '3',
          pt: '2',
          pb: '2',
          color: 'gray.400',
          shadow: 'sm',
          _focus: { borderColor: 'black', ring: 'none', ringOffset: 'none' },
          sm: { fontSize: 'sm', lineHeight: 'sm' },
        })}
      />
      <Label
        htmlFor="password"
        className={css({
          display: 'block',
          fontSize: 'xs',
          lineHeight: 'xs',
          color: 'gray.600',
          textTransform: 'uppercase',
        })}
      >
        Password
      </Label>
      <Input
        id="password"
        name="password"
        type="password"
        required
        className={css({
          mt: '1',
          display: 'block',
          w: 'full',
          appearance: 'none',
          rounded: 'md',
          borderWidth: '1px',
          borderColor: 'gray.300',
          pl: '3',
          pr: '3',
          pt: '2',
          pb: '2',
          color: 'gray.400',
          shadow: 'sm',
          _focus: { borderColor: 'black', ring: 'none', ringOffset: 'none' },
          sm: { fontSize: 'sm', lineHeight: 'sm' },
        })}
      />
      <Button
        disabled={loading}
        className={`${loading
          ? css({ cursor: 'not-allowed', borderColor: 'gray.200', bgColor: 'gray.100' })
          : css({
            borderColor: 'black',
            bgColor: 'black',
            color: 'white',
            _hover: { bgColor: 'white', color: 'black' },
          })
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <Typography>{type === "login" ? "Sign In" : "Sign Up"}</Typography>
        )}
      </Button>
      {type === "login" ? (
        <Typography
          className={css({ textAlign: 'center', fontSize: 'sm', lineHeight: 'sm', color: 'gray.600' })}
        >
          Don`t have an account?{" "}
          <Link
            href="/register"
            className={css({ fontWeight: 'semibold', color: 'gray.800' })}
          >
            Sign up
          </Link>{" "}
          for free.
        </Typography>
      ) : (
        <Typography
          className={css({ textAlign: 'center', fontSize: 'sm', lineHeight: 'sm', color: 'gray.600' })}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className={css({ fontWeight: 'semibold', color: 'gray.800' })}
          >
            Sign in
          </Link>{" "}
          instead.
        </Typography>
      )}
    </form>
  );
}