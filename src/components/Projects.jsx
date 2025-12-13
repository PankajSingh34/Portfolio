import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Code, Star } from "lucide-react";
import { projectsData } from "../data/projects";
import {
  fadeInUp,
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";
import Loading from "./Loading";

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="backdrop-blur-sm rounded-2xl overflow-hidden border hover:border-green-400 shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <Code className="w-12 h-12 text-gray-500" />
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
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <Code className="w-16 h-16 text-gray-400" />
          </div>
        )}

        {/* Overlay - Removed hover effect */}

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : project.status === "In Progress"
                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                : "bg-green-500/20 text-green-400 border border-green-500/30"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
        )}

        {/* Year */}
        <div className="absolute bottom-4 right-4">
          <span className="flex items-center gap-1 text-white text-sm bg-black/50 px-2 py-1 rounded">
            <Calendar className="w-3 h-3" />
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <div className="mb-3">
          <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium border border-gray-600/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-gray-400 text-xs">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const scrollAnimationProps = useScrollAnimation();

  // Get unique categories from projects
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
              💼 My Work
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Featured <span className="text-green-400">Projects</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-green-400 mx-auto mb-6"
          />

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show All Projects Button */}
        {filteredProjects.length >= 6 && (
          <motion.div
            {...scrollAnimationProps}
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
