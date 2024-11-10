"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <div className="relative">
        <motion.div
          className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg blur-lg opacity-50"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="absolute inset-0.5 bg-black rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
            L
          </div>
        </motion.div>
      </div>
      <motion.span
        className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Lunify
      </motion.span>
    </motion.div>
  );
}
