"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    image: "/x.svg",
    href: "#",
    label: "X (Twitter)",
    hoverColor: "#000000",
  },
  {
    image: "/github.svg",
    href: "#",
    label: "GitHub",
    hoverColor: "#ffffff",
  },
  {
    image: "/linkedin.svg",
    href: "#",
    label: "LinkedIn",
    hoverColor: "#0A66C2",
  },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            Freelancer Suite
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-md mb-8"
          >
            Empowering freelancers with smart financial tools. Join thousands of
            professionals who trust us with their business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex space-x-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-6 h-6 relative">
                  <Image
                    src={social.image}
                    alt={social.label}
                    fill
                    className="transition-opacity duration-200 group-hover:opacity-80"
                  />
                </div>
                <span className="sr-only">{social.label}</span>
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20"
                  style={{ backgroundColor: social.hoverColor }}
                  initial={false}
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-neutral-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm"
            >
              © 2024 Freelancer Suite. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              {["Privacy", "Terms", "Cookies"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-neutral-400 hover:text-white text-sm transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
