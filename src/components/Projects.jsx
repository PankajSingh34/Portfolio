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
      className="group rounded-2xl overflow-hidden flex flex-col md:flex-row theme-transition border transition-all duration-300 hover:border-[#333333]"
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
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          <h3
            className="text-xl font-semibold mb-3 transition-colors tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>

          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-3 w-fit"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-color)",
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
            className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-full border transition-all duration-300 font-medium"
            style={{
              borderColor: "var(--text-secondary)",
              backgroundColor: "transparent",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--text-secondary)";
            }}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-full border transition-all duration-300 font-medium"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#444444";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-secondary)";
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
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Featured Projects
          </motion.h2>
          <div className="section-divider mb-2" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-300"
              style={{
                borderColor: activeCategory === cat ? "var(--text-primary)" : "var(--border-color)",
                backgroundColor: activeCategory === cat ? "rgba(255,255,255,0.08)" : "transparent",
                color: activeCategory === cat ? "var(--text-primary)" : "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "#444444";
                  e.currentTarget.style.color = "var(--text-primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.color = "var(--text-muted)";
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
