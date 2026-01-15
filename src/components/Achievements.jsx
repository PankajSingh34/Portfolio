import { motion } from "framer-motion";
import {
  Trophy,
  GitBranch,
  Award,
  Star,
  ExternalLink,
  Github,
  Users,
} from "lucide-react";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const achievementsData = {
  openSource: [
    {
      id: 1,
      title: "ECWoC 2026 Contributor",
      organization: "Elite Coders",
      description:
        "Selected as a contributor for Extended Code Winter of Code 2026 program. Contributing to open source projects and collaborating with developers worldwide.",
      badge: "ECW-2026-906815",
      website: "code.elitecoders.xyz",
      link: "https://code.elitecoders.xyz/id-card/view/singhps588",
      type: "Open Source Program",
      year: "2026",
      status: "Active",
      icon: GitBranch,
      color: "from-blue-400 to-purple-400",
    },
  ],
  hackathons: [
    {
      id: 1,
      title: "NASA Space Hackathon",
      achievement: "4th Place Winner",
      project: "NASA Space Biology Engine",
      description:
        "Secured 4th place among 30 competing teams in the NASA Space Hackathon by developing an interactive astrobiology lab simulation for space life support research. Built real-time controlled-environment biology simulator modeling growth physiology and multi-world adaptation.",
      tech: ["React", "Node.js", "Data Visualization", "Biology APIs"],
      link: "https://nasa-hackathon-lftj.onrender.com/",
      github: "https://github.com/PankajSingh34/NASA-hackathon.git",
      year: "2025",
      icon: Trophy,
      color: "from-orange-400 to-red-400",
    },
  ],
  recognition: [
    {
      id: 1,
      title: "Athletics Secretary",
      organization: "BIAS Bhimtal (2025-2026)",
      description:
        "Elected as Athletics Secretary at BIAS Bhimtal, leading sports activities and organizing inter-college tournaments. Won 5 medals in athletics events showcasing exceptional athletic performance and leadership in sports management.",
      year: "2025-2026",
      type: "Leadership",
      icon: Trophy,
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 2,
      title: "Academic Excellence",
      organization: "BIAS Bhimtal",
      description:
        "Achieved Rank 7 among 170 students, demonstrating exceptional academic performance and dedication to studies alongside extracurricular commitments.",
      year: "2025-2026",
      type: "Academic",
      icon: Star,
      color: "from-blue-400 to-indigo-400",
    },
  ],
};

const AchievementCard = ({ achievement, type, index }) => {
  const Icon = achievement.icon;

  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-black">
            <Icon className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {achievement.title}
            </h3>
            {achievement.organization && (
              <p className="text-green-400 font-medium">
                {achievement.organization}
              </p>
            )}
            {achievement.achievement && (
              <p className="text-green-400 font-medium">
                {achievement.achievement}
              </p>
            )}
          </div>
        </div>
        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
          {achievement.year}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {achievement.description}
      </p>

      {/* Special content based on type */}
      {type === "openSource" && achievement.badge && (
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="font-medium">Authenticity Key:</span>
            <span className="font-mono bg-gray-700/30 px-2 py-1 rounded text-green-400">
              {achievement.badge}
            </span>
          </div>
          {achievement.website && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Website:</span>
              <a
                href={`https://${achievement.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                {achievement.website}
              </a>
            </div>
          )}
          {achievement.link && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>ECWoC ID Card:</span>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                View ID Card
              </a>
            </div>
          )}
        </div>
      )}

      {type === "hackathons" && achievement.tech && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {achievement.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Status badge for ongoing items */}
      {achievement.status && (
        <div className="mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              achievement.status === "Active"
                ? "bg-green-600/20 text-green-400 border border-green-600/30"
                : "bg-gray-600/20 text-gray-400 border border-gray-600/30"
            }`}
          >
            {achievement.status}
          </span>
        </div>
      )}

      {/* Action Links */}
      {achievement.github && (
        <div className="flex gap-3">
          {achievement.github && (
            <a
              href={achievement.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700/50 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-600/50 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const SectionHeader = ({ title, description, icon: Icon }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-6 h-6 text-green-400" />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Achievements = () => {
  const scrollAnimationProps = useScrollAnimation();

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 relative overflow-hidden"
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
        {/* Main Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
              Recognition & Impact
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            My <span className="text-green-400">Achievements</span>
            <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my contributions to open source, hackathon victories,
            and community recognition.
          </motion.p>
        </motion.div>

        {/* Open Source Section */}
        <div className="mb-16">
          <SectionHeader
            title="Open Source Contributions"
            description="Contributing to the global developer community through meaningful projects and collaborations."
            icon={GitBranch}
          />
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-1 gap-8"
          >
            {achievementsData.openSource.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                type="openSource"
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Hackathons Section */}
        <div className="mb-16">
          <SectionHeader
            title="Hackathons & Competitions"
            description="Building innovative solutions under pressure and collaborating with talented teams worldwide."
            icon={Trophy}
          />
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-1 gap-8"
          >
            {achievementsData.hackathons.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                type="hackathons"
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Extracurricular - Beyond Code Section */}
        <div>
          <SectionHeader
            title="Extracurricular - Beyond Code"
            description="Achievements in sports, athletics, and leadership roles beyond the coding world."
            icon={Trophy}
          />
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-1 gap-8"
          >
            {achievementsData.recognition.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                type="recognition"
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
