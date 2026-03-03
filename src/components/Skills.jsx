import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const Skills = () => {
  const { isDark } = useTheme();
  const scrollAnimationProps = useScrollAnimation();

  // Technologies organized by category: Languages → Frontend → Backend → DevOps
  const technologies = [
    // Languages
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#007396",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C",
    },
    // Frontend
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
      invertInDark: true,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    // Backend
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#4169E1",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "#FFCA28",
    },
    {
      name: "Socket.io",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      color: "#010101",
      invertInDark: true,
    },
    // DevOps & Tools
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
      invertInDark: true,
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "#FF9900",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "#FCC624",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 theme-transition"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            My Skills
          </motion.h2>
          <div className="section-divider mb-2" />
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              variants={itemVariants}
              custom={index}
              className="group relative flex flex-col items-center"
            >
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center overflow-hidden theme-transition"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--bg-elevated)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, var(--accent), transparent 70%)",
                  }}
                />
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="relative z-10 w-8 h-8 md:w-10 md:h-10 object-contain"
                  style={{
                    filter:
                      tech.invertInDark && isDark
                        ? "invert(1) brightness(1.2)"
                        : "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
