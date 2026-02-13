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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-20 items-center w-full">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-center lg:text-left tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Turning Vision Into{" "}
              <br className="hidden lg:block" />
              Reality With Code{" "}
              <br className="hidden lg:block" />
              And Design.
            </motion.h1>

            {/* Role with Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="mb-8 text-center lg:text-left"
            >
              <span
                className="text-lg md:text-xl lg:text-2xl font-normal"
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
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="/PSRESUME(5).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 w-full sm:w-auto hover:scale-[1.02]"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0a0a0a",
                }}
              >
                Resume
                <ExternalLink size={15} />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3">
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
                    className="w-11 h-11 rounded-full border transition-all duration-300 flex items-center justify-center hover:scale-105"
                    style={{
                      borderColor: "#2a2a2a",
                      backgroundColor: "transparent",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#222";
                      e.currentTarget.style.color = "#222";
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

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src="/images/professional.jpg"
                alt="Pankaj Singh"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full object-cover object-top"
                style={{
                  boxShadow: "0 10px 50px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
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
