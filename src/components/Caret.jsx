import React from "react";
import { motion } from "framer-motion";
export const Caret = () => {
  return (
    <motion.div
      aria-hidden={true}
      className="inline-block bg-primary w-0.5 h-7"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
    />
  );
};
