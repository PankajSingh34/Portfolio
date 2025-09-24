import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "medium", color = "blue" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    green: "border-green-500",
    white: "border-white",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const Loading = ({ message = "Loading...", fullScreen = false }) => {
  const containerClass = fullScreen
    ? "fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50"
    : "w-full py-8";

  return (
    <div
      className={`${containerClass} flex flex-col items-center justify-center`}
    >
      <LoadingSpinner size="large" color="blue" />
      <motion.p
        className="text-gray-300 mt-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export { LoadingSpinner };
export default Loading;
