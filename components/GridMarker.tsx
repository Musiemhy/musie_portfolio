"use client";
import { motion } from "framer-motion";

export const GridMarker = () => {
  return (
    <motion.div 
      whileHover={{ rotate: 45, scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="grid grid-cols-2 gap-2 p-2 group"
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 bg-white rounded-[2px]"
        />
      ))}
    </motion.div>
  );
};