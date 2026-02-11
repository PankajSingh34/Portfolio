import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 transform-gpu z-50"
      style={{
        backgroundColor: "var(--accent)",
        scaleX: progress / 100,
        transformOrigin: "0%",
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  );
};

export default ScrollProgress;
