"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (error: string) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration. Please try again later.";
      case "AccessDenied":
        return "Access denied. You do not have permission to sign in.";
      case "Verification":
        return "The verification link is invalid or has expired. Please request a new one.";
      default:
        return "An unexpected error occurred. Please try again.";
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

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-red-500">
                Authentication Error
              </h1>
              <p className="text-sm text-neutral-400">
                {error
                  ? getErrorMessage(error)
                  : "An error occurred during authentication."}
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <Button
                onClick={() => router.push("/signin")}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="w-full border-neutral-700 hover:bg-neutral-800"
              >
                Go Home
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
