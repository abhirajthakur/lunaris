"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="p-4 relative z-10 w-full max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center px-4 py-2 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm"
        >
          <span className="text-sm text-blue-300">
            ✨ New: Automated Invoice Reminders
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-center flex items-center justify-center"
        >
          <Image src="/logo.svg" alt="Lunify" width={650} height={400} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8"
        >
          Transform your freelance business with our all-in-one platform. Create
          professional invoices, track expenses, and get paid faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => router.push("/signup")}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-lg px-8 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
          >
            Start Free Trial
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push("/signin")}
            className="text-lg px-8 border-blue-500/20 hover:bg-blue-500/10 text-blue-300 hover:text-blue-200 transition-all duration-300"
          >
            Sign In
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { text: "30-day free trial", icon: CheckCircle2Icon },
            { text: "No credit card required", icon: CheckCircle2Icon },
            { text: "Cancel anytime", icon: CheckCircle2Icon },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="flex items-center justify-center gap-2 text-blue-200"
            >
              <item.icon className="h-5 w-5 text-blue-400" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
