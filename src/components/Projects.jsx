import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const ProjectCard = ({ project, index }) => {
  const { isDark } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group card-brutal rounded-2xl overflow-hidden flex flex-col md:flex-row theme-transition"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Image */}
      <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden flex-shrink-0">
        {!imageLoaded && !imageError && (
          <div
            className="absolute inset-0 animate-pulse flex items-center justify-center"
            style={{ backgroundColor: "var(--bg-elevated)" }}
          >
            <Code
              className="w-12 h-12"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        )}
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: "var(--bg-elevated)" }}
          >
            <Code
              className="w-16 h-16"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        )}
        {/* Featured Project Label */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-lg text-white text-xs font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "var(--accent)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Featured Project
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          <h3
            className="text-xl font-bold mb-3 transition-colors"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>

          <span
            className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 w-fit"
            style={{
              backgroundColor: "#b63e96",
              color: "#ffffff",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {project.category}
          </span>

          <p
            className="text-sm mb-4 line-clamp-3"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          <div className="flex-1" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border theme-transition"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-xl border-2 transition-all duration-300 font-semibold"
            style={{
              borderColor: isDark ? "#ffffff" : "#000000",
              backgroundColor: isDark ? "#ffffff" : "#000000",
              color: isDark ? "#000000" : "#ffffff",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? "#ffffff" : "#000000";
              e.currentTarget.style.borderColor = isDark ? "#ffffff" : "#000000";
              e.currentTarget.style.color = isDark ? "#000000" : "#ffffff";
            }}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-xl border-2 transition-all duration-300 font-semibold"
            style={{
              borderColor: isDark ? "#ffffff" : "#000000",
              backgroundColor: "transparent",
              color: isDark ? "#ffffff" : "#000000",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = isDark ? "#ffffff" : "#000000";
              e.currentTarget.style.color = isDark ? "#ffffff" : "#000000";
            }}
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const scrollAnimationProps = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryMap = {
    All: "All",
    AIML: "AI/ML",
    "AI/ML": "AI/ML",
    Fullstack: "Full Stack",
    "Full Stack": "Full Stack",
    Hackathon: "Hackathon",
  };
  const categories = ["All", "AIML", "Fullstack", "Hackathon"];

  const filteredProjects =
    categoryMap[activeCategory] === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === categoryMap[activeCategory],
        );

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden theme-transition"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Featured <span style={{ color: "var(--accent)" }}>Projects</span>
          </motion.h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-lg text-sm font-bold border-2 cursor-pointer transition-all duration-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                borderColor: activeCategory === cat ? "var(--accent)" : "#000000",
                backgroundColor: activeCategory === cat ? "var(--accent)" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#000000",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#000000";
                  e.currentTarget.style.color = "#000000";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects - Stacked Layout */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              {...scrollAnimationProps}
              variants={itemVariants}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
