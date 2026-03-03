import { useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

// Apple-style: pure fade, no Y movement, gentle stagger
const appleGrid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const appleCard = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      className="flex flex-col rounded-3xl overflow-hidden theme-transition cursor-default h-full"
      style={{
        backgroundColor: "var(--bg-card)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      {/* Image — large, fills top */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/3", backgroundColor: "var(--bg-elevated)" }}
      >
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <Code
              className="w-10 h-10"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        )}
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code
              className="w-14 h-14"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-6">
        <span
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          {project.category}
        </span>

        <h3
          className="text-xl font-bold tracking-tight mb-2 leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed line-clamp-3 mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-secondary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex gap-2 mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg-elevated)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
            }}
          >
            <Github size={13} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 300 + 16;
    el.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden theme-transition"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={appleGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <motion.h2
            variants={appleCard}
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Featured Projects
          </motion.h2>
          <div className="section-divider mb-4" />

          {/* Arrow buttons — right-aligned */}
          <motion.div variants={appleCard} className="flex justify-end gap-2">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-color)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-elevated)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-card)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-color)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-elevated)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-card)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <style>{`
          .projects-scroll::-webkit-scrollbar { display: none; }
          .projects-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <motion.div
          variants={appleGrid}
          initial="hidden"
          animate="visible"
          ref={scrollRef}
          className="projects-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={appleCard}
              className="shrink-0 snap-start"
              style={{ width: "min(300px, 80vw)" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
