// Smooth ease curve
const smooth = [0.4, 0, 0.2, 1];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smooth,
    },
  },
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = () => {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
  };
};
