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

//this is a PR

type FormType = "login" | "register";

export default function Form({ type }: { type: FormType }) {
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
    >
      {type === "register" && (
        <>
          <Label htmlFor="name">
            Username
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </>
      )}
      <Label htmlFor="email">
        Email Address
      </Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="panic@thedis.co"
        autoComplete="email"
        required
      />
      <Label htmlFor="password">
        Password
      </Label>
      <Input
        id="password"
        name="password"
        type="password"
        required
      />
      <Button
        disabled={loading}
        className={`${loading
          ? "cursor-not-allowed border-gray-200 bg-gray-100"
          : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <Typography>{type === "login" ? "Sign In" : "Sign Up"}</Typography>
        )}
      </Button>
      {type === "login" ? (
        <Typography>
          Don`t have an account?{" "}
          <Link href="/register">
            Sign up
          </Link>{" "}
          for free.
        </Typography>
      ) : (
        <Typography>
          Already have an account?{" "}
          <Link href="/login">
            Sign in
          </Link>{" "}
          instead.
        </Typography>
      )}
    </form>
  );
}