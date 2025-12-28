import { motion } from "framer-motion";
import { ChevronDown, Download, Eye, Zap, Code2, Rocket } from "lucide-react";
import { useTypingAnimation } from "../hooks";
import {
  containerVariants,
  itemVariants,
  textVariants,
  letterVariants,
} from "../utils/animations";

const Hero = () => {
  const roles = ["Full Stack Developer", "Problem Solver"];

  const typedRole = useTypingAnimation(roles, 100, 2000);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const downloadResume = () => {
    try {
      const resumeUrl = "/PSRESUME2.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "PSRESUME2.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      window.open("/PSRESUME2.pdf", "_blank");
    }
  };

  const stats = [
    { number: "2", label: "Hackathons Won", icon: Rocket },
    { number: "5+", label: "Open Source PRs", icon: Code2 },
    { number: "10+", label: "Team Projects", icon: Zap },
    { number: "∞", label: "Cups of Coffee", icon: Rocket },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 sm:pt-0"
    >
      {/* Gradient Orbs removed for a cleaner background */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          {/* Main Heading */}
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {["Hi,", "I'm"].map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-white mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span variants={itemVariants} className="text-green-400">
              Pankaj Singh
            </motion.span>
          </motion.h1>

          {/* Role with Typing Animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-2xl md:text-3xl text-gray-300">
              {typedRole}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-1 h-8 bg-green-400 ml-1"
              />
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              onClick={scrollToProjects}
              className="bg-green-400 text-white font-semibold py-4 px-8 rounded-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <Eye size={20} />
                View My Work
              </span>
            </motion.button>
            <a
              href="/PSRESUME2.pdf"
              download
              className="bg-transparent border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-gray-500 text-sm mb-2">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer"
              onClick={scrollToProjects}
            >
              <ChevronDown
                size={32}
                className="text-gray-500 hover:text-green-400 transition-colors duration-300"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
