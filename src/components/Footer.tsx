"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-8 text-center text-muted-foreground"
    >
      <p>&copy; {new Date().getFullYear()} XD-coder. All rights reserved.</p>
    </motion.footer>
  );
}
