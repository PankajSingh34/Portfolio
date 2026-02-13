import { motion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { useTypingAnimation } from "../hooks";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/animations";

const Hero = () => {
  const { isDark } = useTheme();
  const roles = ["Full Stack Developer", "Problem Solver"];
  const typedRole = useTypingAnimation(roles, 100, 2000);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:singhps588@gmail.com",
      label: "Gmail",
    },
    {
      icon: Github,
      href: "https://github.com/PankajSingh34",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pankaj-singh-2a968b212/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-16 theme-transition"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center pt-4 sm:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center w-full">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center md:justify-center order-1 md:order-2 mt-8 sm:mt-0"
          >
            <div className="relative">
              <img
                src="/images/professional.jpg"
                alt="Pankaj Singh"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  border: "2px solid #1e1e1e",
                }}
              />
              {/* Subtle ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transform: "scale(1.08)",
                }}
              />
            </div>
          </motion.div>

          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-4 md:mb-6 text-center md:text-left tracking-tight"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Turning Vision Into{" "}
              <br className="hidden md:block" />
              Reality With Code{" "}
              <br className="hidden md:block" />
              And Design.
            </motion.h1>

            {/* Role with Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8 text-center md:text-left"
            >
              <span
                className="text-lg md:text-xl lg:text-2xl font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                {typedRole}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-[3px] h-6 md:h-7 ml-1 align-middle"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>
            </motion.div>

            {/* CTA Buttons & Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <a
                href="/PSRESUME(5).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 w-full sm:w-auto hover:scale-105"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0a0a0a",
                }}
              >
                Resume
                <ExternalLink size={15} />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Gmail" ? "_blank" : undefined}
                    rel={
                      social.label !== "Gmail"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border transition-all duration-300 flex items-center justify-center hover:scale-110"
                    style={{
                      borderColor: "#2a2a2a",
                      backgroundColor: "transparent",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#ffffff";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#2a2a2a";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="pb-6 sm:pb-8 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
