import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const experienceData = [
  {
    id: 1,
    title: "Open Source Contributor",
    company: "ECWoC 2026 - Elite Coders",
    location: "Remote",
    duration: "Jan 2026 - Present",
    type: "Open Source",
    description: [
      "Selected as 1 of 50+ contributors for the Extended Code Winter of Code 2026 program out of 300+ applicants.",
      "Contributed 8+ pull requests across 3 open source repositories, with 6 PRs merged into main.",
      "Resolved 12+ issues ranging from bug fixes to feature additions, improving codebase quality by ~18%.",
      "Authenticity Badge: ECW-2026-906815",
    ],
    technologies: [
      "Open Source",
      "Git",
      "GitHub",
      "Collaboration",
      "Code Review",
    ],
    link: "https://code.elitecoders.xyz/id-card/view/singhps588",
    color: "from-gray-300 to-white",
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "Brown Spark Digital",
    location: "Remote",
    duration: "Sept 2025 - Oct 2025",
    type: "Internship",
    description: [
      "Developed and delivered 3 full-stack client web applications using MERN stack, reducing average page load time by 40% through code splitting and lazy loading.",
      "Built 10+ reusable React components and UI modules, cutting future development time by ~30% across projects.",
      "Designed and implemented 15+ RESTful API endpoints handling authentication, data processing, and third-party integrations.",
      "Optimized MongoDB queries and schema design, improving database read performance by 35% on high-traffic collections.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Git",
      "CRM Development",
    ],
    color: "from-gray-400 to-gray-200",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "CollabAuditAI",
    location: "Remote",
    duration: "Sept 2025 - Present",
    type: "Part-time",
    description: [
      "Building and maintaining a collaborative AI-powered audit platform serving 200+ active users, with 99.5% uptime since launch.",
      "Implemented real-time collaboration using Socket.io, supporting up to 50 concurrent users per session with sub-100ms latency.",
      "Designed 20+ scalable REST API endpoints and integrated 4 third-party services, reducing manual audit time by 60%.",
      "Delivered 5 major feature releases working closely with product managers, achieving a 4.7/5 user satisfaction score.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],
    color: "from-white to-gray-300",
  },
];

const ExperienceCard = ({ experience, index, isLast }) => {
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="relative flex items-start gap-6 group"
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center pt-6">
        <div
          className="w-2.5 h-2.5 rounded-full relative z-10 shrink-0"
          style={{
            backgroundColor: "var(--accent)",
            boxShadow:
              "0 0 0 3px var(--bg-primary), 0 0 0 5px var(--bg-elevated)",
          }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-3"
            style={{
              minHeight: "2rem",
              background:
                "linear-gradient(180deg, var(--bg-elevated) 0%, transparent 100%)",
            }}
          />
        )}
      </div>

      {/* Content Card */}
      <div
        className="flex-1 rounded-3xl theme-transition relative overflow-hidden mb-2"
        style={{
          backgroundColor: "var(--bg-card)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, var(--accent), transparent 60%)",
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border-strong), transparent)",
            opacity: 0.12,
          }}
        />

        {/* Card Header */}
        <div className="px-8 pt-7 pb-5 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            {/* Left: title + company */}
            <div className="flex-1 min-w-0">
              {/* Type badge inline with title */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {experience.type}
                </span>
              </div>
              <h3
                className="text-xl font-bold tracking-tight mb-1.5"
                style={{ color: "var(--text-primary)" }}
              >
                {experience.title}
              </h3>
              <div
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--text-secondary)" }}
              >
                <Briefcase size={13} strokeWidth={2.5} />
                {experience.company}
              </div>
            </div>

            {/* Right: duration + location pills */}
            <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 shrink-0">
              <div
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                <Calendar size={11} />
                {experience.duration}
              </div>
              <div
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                <MapPin size={11} />
                {experience.location}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-8 h-px"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Description */}
        <div className="px-8 pt-5 pb-5 relative z-10">
          <ul className="space-y-2.5">
            {experience.description.map((item, idx) => (
              <li
                key={idx}
                className="text-sm leading-relaxed flex items-start gap-3"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "var(--text-muted)" }}
                />
                <span className="flex-1">
                  {item
                    .split(
                      /((?<!\w)\d[\d,.%+\/x-]*(?:\+)?(?=\s|,|\.|\))|(?<!\w)(?:merged|optimized|delivered|implemented|designed|built|resolved|reduced|improved|achieving|scalable|real-time|collaborative|concurrent|reusable|full-stack|MERN stack|REST API|Socket\.io|JWT|MongoDB|React\.js|Node\.js)(?!\w))/gi,
                    )
                    .map((part, i) =>
                      /^(?:\d[\d,.%+\/x-]*\+?$|merged|optimized|delivered|implemented|designed|built|resolved|reduced|improved|achieving|scalable|real-time|collaborative|concurrent|reusable|full-stack|MERN stack|REST API|Socket\.io|JWT|MongoDB|React\.js|Node\.js)$/i.test(
                        part.trim(),
                      ) && part.trim() ? (
                        <strong
                          key={i}
                          style={{ color: "var(--text-primary)" }}
                        >
                          {part}
                        </strong>
                      ) : (
                        part
                      ),
                    )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div
          className="mx-8 h-px"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Tech Stack */}
        <div className="px-8 py-5 relative z-10">
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-bold theme-transition"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link button */}
        {experience.link && (
          <>
            <div
              className="mx-8 h-px"
              style={{ backgroundColor: "var(--border-color)" }}
            />
            <div className="px-8 py-5 relative z-10">
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold py-2.5 px-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  border: "1px solid #000000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#000000";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                <ExternalLink size={13} />
                View ID Card
              </a>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const scrollAnimationProps = useScrollAnimation();

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden theme-transition"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
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
            Work Experience
          </motion.h2>
          <div className="section-divider mb-6" />

          <motion.p
            variants={itemVariants}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            My professional journey in software development, where I've grown
            from an intern to contributing meaningfully to enterprise-level
            products.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="space-y-8"
        >
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
