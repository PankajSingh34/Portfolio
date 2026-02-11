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
      className="relative h-screen flex flex-col justify-center overflow-hidden pt-16 theme-transition"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="double-border-frame inline-block">
              <div className="double-border-frame-inner">
                <img
                  src="/images/professional.jpg"
                  alt="Pankaj Singh"
                  className="w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] object-cover block"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "var(--text-primary)",
              }}
            >
              Turning Vision Into Reality With{" "}
              <span style={{ color: "var(--accent)" }}>Code</span> And{" "}
              <span style={{ color: "var(--green-accent)" }}>Design.</span>
            </motion.h1>

            {/* Role with Typing Animation */}
            <motion.div variants={itemVariants} className="mb-8">
              <span
                className="text-xl md:text-2xl font-medium"
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
                  className="inline-block w-[3px] h-7 ml-1 align-middle"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>
            </motion.div>

            {/* CTA Buttons & Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <a
                href="/PSRESUME(5).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
              >
                Resume
                <ExternalLink size={16} />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-4">
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
                    className="w-14 h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center hover:scale-110"
                    style={{
                      borderColor: "#000000",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--accent)";
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#000000";
                      e.currentTarget.style.color = "#000000";
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={26} strokeWidth={2} />
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
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pb-6 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
