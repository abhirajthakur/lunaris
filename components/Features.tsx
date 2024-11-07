"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowRightIcon,
  BarChart3Icon,
  CreditCardIcon,
  WrenchIcon,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: WrenchIcon,
    title: "Smart Invoicing",
    description:
      "Create professional invoices in seconds with customizable templates and automated reminders. Keep track of payments and send automatic follow-ups.",
    color: "from-blue-500/20 to-blue-500/0",
  },
  {
    icon: BarChart3Icon,
    title: "Expense Tracking",
    description:
      "Track expenses, scan receipts, and categorize transactions automatically. Generate detailed reports and insights for better financial management.",
    color: "from-purple-500/20 to-purple-500/0",
  },
  {
    icon: CreditCardIcon,
    title: "Payment Processing",
    description:
      "Accept payments online with multiple payment gateways and get paid faster. Support for credit cards, bank transfers, and digital wallets.",
    color: "from-green-500/20 to-green-500/0",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <Card
        onMouseMove={handleMouseMove}
        className="h-full p-8 bg-neutral-900/50 border-neutral-800 overflow-hidden relative"
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-radial ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{
            background: useMotionTemplate`
              radial-gradient(
                250px circle at ${mouseX}px ${mouseY}px,
                var(--tw-gradient-from),
                var(--tw-gradient-to)
              )`,
          }}
        />
        <div className="relative z-10">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Features() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-10 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-500 font-medium mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 mb-6"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Streamline your freelance business with our comprehensive suite of
            tools designed to save you time and money.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => (window.location.href = "/dashboard")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon className="w-5 h-5" />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-950 pointer-events-none" />
    </section>
  );
}
