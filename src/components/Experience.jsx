import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
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
      "Selected as a contributor for Extended Code Winter of Code 2026 program.",
      "Contributing to open source projects and collaborating with developers worldwide.",
      "Working on real-world projects to enhance coding skills and build meaningful solutions.",
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
    duration: "Oct 2025 - Sept 2025",
    type: "Internship",
    description: [
      "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) for client projects.",
      "Built responsive and dynamic user interfaces with React.js, implementing modern UI/UX design principles and component-based architecture.",
      "Designed and developed RESTful APIs using Express.js and Node.js to handle server-side logic and database operations.",
      "Worked with MongoDB for database design, data modeling, and efficient query optimization to ensure optimal application performance.",
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
      "Building and maintaining a collaborative AI-powered audit platform for teams.",
      "Implemented real-time collaboration features and secure authentication flows.",
      "Designed scalable backend APIs and integrated third-party services for enhanced audit capabilities.",
      "Worked closely with product managers and users to deliver impactful features and improvements.",
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
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full relative z-10"
          style={{
            backgroundColor: "var(--accent)",
            border: "3px solid var(--bg-primary)",
          }}
        />
        {!isLast && (
          <div
            className="w-0.5 h-32 mt-2"
            style={{ backgroundColor: "var(--border-color)" }}
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        className="flex-1 card-brutal rounded-2xl p-6 theme-transition"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {experience.title}
            </h3>
            <div
              className="flex items-center gap-2 font-medium"
              style={{ color: "var(--accent)" }}
            >
              <Briefcase size={16} />
              {experience.company}
            </div>
          </div>

          <div className="flex flex-col md:items-end mt-3 md:mt-0">
            <div
              className="flex items-center gap-2 text-sm mb-1"
              style={{ color: "var(--text-secondary)" }}
            >
              <Calendar size={14} />
              {experience.duration}
            </div>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <MapPin size={14} />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Type Badge */}
        <div className="mb-4">
          <span
            className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white"
            style={{
              backgroundColor: "var(--accent)",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {experience.type}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <ul className="space-y-3">
            {experience.description.map((item, idx) => (
              <li
                key={idx}
                className="text-sm leading-relaxed flex items-start gap-2"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-medium border theme-transition"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ID Card Link */}
        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm py-2.5 px-5 rounded-xl border-2 transition-all duration-300 font-semibold hover:scale-105"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "transparent",
              color: "var(--accent)",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            <ExternalLink size={16} />
            View ECWoC ID Card
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const { isDark } = useTheme();
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
            className="text-4xl md:text-6xl font-black mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Work <span style={{ color: "var(--accent)" }}>Experience</span>
          </motion.h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: "var(--accent)" }}
          />

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
