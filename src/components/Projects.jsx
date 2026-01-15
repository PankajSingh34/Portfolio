import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { projectsData } from "../data/projects";
import Loading from "./Loading";

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
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
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-green-600/80 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Content area with flex-grow to push tags and buttons to the bottom */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex-1" />
          {/* Tag row absolutely anchored at the bottom of content area */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[40px] items-center">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
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
    </article>
  );
};

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories from projects
  // Map button labels to data categories
  const categoryMap = {
    All: "All",
    AIML: "AI/ML",
    "AI/ML": "AI/ML",
    Fullstack: "Full Stack",
    "Full Stack": "Full Stack",
    Hackathon: "Hackathon",
  };
  // Button labels to display
  const categories = ["All", "AIML", "Fullstack", "Hackathon"];

  // Filter projects based on selected category
  const filteredProjects =
    categoryMap[activeCategory] === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === categoryMap[activeCategory]
        );

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
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
              My Work
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Featured <span className="text-green-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-green-400 mx-auto mb-6" />
        </div>

        {/* Projects Grid (restored) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
