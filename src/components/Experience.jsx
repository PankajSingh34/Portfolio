import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const experienceData = [
  {
    id: 1,
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
    color: "from-blue-400 to-purple-400",
  },
  {
    id: 2,
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
    color: "from-green-400 to-emerald-400",
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
        {/* Timeline Dot */}
        <motion.div className="w-4 h-4 rounded-full bg-green-400 border-4 border-black relative z-10" />

        {/* Timeline Line */}
        {!isLast && <div className="w-0.5 h-32 bg-gray-600 mt-2" />}
      </div>

      {/* Content Card */}
      <motion.div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-green-400 font-medium">
              <Briefcase size={16} />
              {experience.company}
            </div>
          </div>

          <div className="flex flex-col md:items-end mt-3 md:mt-0">
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
              <Calendar size={14} />
              {experience.duration}
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Type Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
            {experience.type}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <ul className="space-y-3">
            {experience.description.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const scrollAnimationProps = useScrollAnimation();

  return (
    <section
      id="experience"
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
              Professional Journey
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Work <span className="text-green-400">Experience</span>
            <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
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
