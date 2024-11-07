"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="p-4 relative z-10 w-full max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center px-4 py-2 mb-8 border border-neutral-700 rounded-full bg-neutral-900/50 backdrop-blur-sm"
        >
          <span className="text-sm text-neutral-300">
            ✨ New: Automated Invoice Reminders
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-blue-400 to-neutral-400 mb-8"
        >
          Freelancer Suite
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-neutral-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8"
        >
          Transform your freelance business with our all-in-one platform. Create
          professional invoices, track expenses, and get paid faster. Join
          thousands of freelancers who've simplified their finances.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div variants={fadeIn}>
            <Button
              size="lg"
              onClick={() => router.push("/auth/signup")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 text-white"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/auth/signin")}
              className="text-lg px-8 border-neutral-700 hover:bg-neutral-800"
            >
              Sign In
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { text: "30-day free trial", icon: CheckCircle2Icon },
            { text: "No credit card required", icon: CheckCircle2Icon },
            { text: "Cancel anytime", icon: CheckCircle2Icon },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex items-center justify-center gap-2 text-neutral-300"
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
