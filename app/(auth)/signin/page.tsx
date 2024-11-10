"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("resend", {
        email,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Check your email",
        description: "A magic link has been sent to your email address.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, { callbackUrl });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect with provider. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-4"
      >
        <Card className="p-8 bg-neutral-900/50 border-neutral-800">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center"
              >
                {error === "OAuthSignin" &&
                  "Error connecting to provider. Please try again."}
                {error === "OAuthCallback" &&
                  "Error during authentication. Please try again."}
                {error === "OAuthCreateAccount" &&
                  "Could not create account. Please try again."}
                {error === "EmailCreateAccount" &&
                  "Could not create account. Please try again."}
                {error === "Callback" &&
                  "Invalid callback URL. Please try again."}
                {error === "OAuthAccountNotLinked" &&
                  "Email already used with different provider."}
                {error === "EmailSignin" &&
                  "The email link is invalid or has expired."}
                {error === "CredentialsSignin" &&
                  "Invalid credentials. Please try again."}
                {!error.match(/^[A-Za-z]+$/) &&
                  "An error occurred. Please try again."}
              </motion.div>
            )}

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-neutral-400">
                Sign in to your account
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="bg-neutral-800/50 border-neutral-700"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign in with Email
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-neutral-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-neutral-900 px-2 text-neutral-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={() => handleOAuthSignIn("github")}
                disabled={isLoading}
                className="border-neutral-700 hover:bg-neutral-800"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOAuthSignIn("google")}
                disabled={isLoading}
                className="border-neutral-700 hover:bg-neutral-800"
              >
                <Icons.google className="mr-2 h-4 w-4" /> Google
              </Button>
            </div>

            <p className="text-center text-sm text-neutral-400">
              Don't have an account?{" "}
              <Button
                variant="link"
                className="p-0"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </Button>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
