"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { CheckCircle2Icon } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function PricingCard({
  title,
  price,
  features,
  cta,
  popular,
}: {
  title: string;
  price: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card
        className={`h-full p-8 relative backdrop-blur-sm transition-colors duration-300 ${
          popular
            ? "border-blue-500 bg-neutral-900/70"
            : "border-neutral-800 bg-neutral-900/40"
        }`}
      >
        {popular && (
          <div className="absolute -top-3 inset-x-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              Most Popular
            </motion.div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={popular ? "pt-4" : ""}
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-neutral-400">/month</span>
          </div>
          <ul className="mb-6 space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center text-neutral-300 group"
              >
                <CheckCircle2Icon className="w-5 h-5 mr-3 text-blue-500 transition-transform duration-200 group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors duration-200">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
          <Button
            className={`w-full transition-all duration-300 ${
              popular
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/20"
                : "bg-neutral-800 hover:bg-neutral-700"
            } text-white`}
          >
            {cta}
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
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
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400"
          >
            Simple, Transparent Pricing
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="0"
            features={[
              "5 Invoices per month",
              "Basic expense tracking",
              "Email support",
              "Single user",
              "Basic templates",
            ]}
            cta="Start Free"
            popular={false}
          />
          <PricingCard
            title="Professional"
            price="29"
            features={[
              "Unlimited invoices",
              "Advanced expense tracking",
              "Priority support",
              "Up to 3 users",
              "Custom branding",
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            title="Enterprise"
            price="99"
            features={[
              "Everything in Pro",
              "Unlimited users",
              "API access",
              "Custom workflows",
              "Dedicated support",
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </div>
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={100}
        className="w-full h-full absolute"
        particleColor="#FFFFFF"
      />
    </section>
  );
}
