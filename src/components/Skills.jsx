import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const Skills = () => {
  const scrollAnimationProps = useScrollAnimation();

  // Exact technologies from your screenshot in the same order
  const technologies = [
    // Row 1
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    // Row 2
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "#FCC624",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#007396",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    // Row 3
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "#FF9900",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      color: "#A8B9CC",
    },
    {
      name: "Socket.io",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      color: "#010101",
    },
    {
      name: "JWT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jsonwebtokens/jsonwebtokens-original.svg",
      color: "#000000",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      color: "#646CFF",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            My Skills
          </motion.h2>
        </motion.div>

        {/* Technologies Grid - 7 columns to match your screenshot */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="grid grid-cols-7 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              variants={itemVariants}
              custom={index}
              className="group relative flex flex-col items-center"
            >
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-sm border border-gray-300/20 flex items-center justify-center transition-all duration-300 hover:border-green-400 hover:shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  style={{
                    filter:
                      tech.name === "Express" ||
                      tech.name === "GitHub" ||
                      tech.name === "Socket.io" ||
                      tech.name === "JWT"
                        ? "invert(0.8)"
                        : "none",
                  }}
                />
              </motion.div>

              {/* Enhanced Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                <div className="bg-gray-900 border border-green-400/50 text-green-400 text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  {tech.name}
                  {/* Tooltip Arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-green-400/50 rotate-45"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
