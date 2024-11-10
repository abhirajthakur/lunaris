"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifyPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleResend = async () => {
    if (timeLeft > 0) return;

    try {
      // Here you would call your API to resend the verification email
      setTimeLeft(60);
      toast({
        title: "Email sent",
        description: "A new verification email has been sent to your inbox.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend verification email. Please try again.",
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

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Check your email
              </h1>
              <p className="text-sm text-neutral-400">
                We've sent a verification link to{" "}
                <span className="font-medium text-blue-400">{email}</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-neutral-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-neutral-900 px-2 text-neutral-400">
                    What's next?
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-blue-500" />
                  Click the link in the email to verify your account
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-blue-500" />
                  The link will expire in 24 hours
                </li>
                <li className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-blue-500" />
                  Check your spam folder if you don't see the email
                </li>
              </ul>
            </div>

            <Button
              variant="outline"
              onClick={handleResend}
              disabled={timeLeft > 0}
              className="relative"
            >
              {timeLeft > 0 ? (
                <>
                  Resend email in {timeLeft}s
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute inset-0 bg-blue-500/10 transition-all duration-1000"
                      style={{ right: `${(timeLeft / 60) * 100}%` }}
                    />
                  </span>
                </>
              ) : (
                "Resend verification email"
              )}
            </Button>

            <p className="text-center text-sm text-neutral-400">
              <Button
                variant="link"
                className="p-0"
                onClick={() => router.push("/signin")}
              >
                Use a different email
              </Button>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
