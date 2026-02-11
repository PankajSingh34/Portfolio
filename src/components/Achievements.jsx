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
import { useTheme } from "../context/ThemeContext";
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
        "Secured 4th place among 30 teams by developing an interactive astrobiology lab simulation for space life support research.",
      tech: ["React", "Node.js", "Data Visualization", "Biology APIs"],
      link: "https://nasa-hackathon-lftj.onrender.com/",
      github: "https://github.com/PankajSingh34/NASA-hackathon.git",
      year: "2025",
      icon: Trophy,
      color: "from-orange-400 to-red-400",
    },
  ],
  certifications: [
    {
      id: 1,
      title: "MongoDB Associate Developer",
      organization: "MongoDB",
      description:
        "Earned MongoDB Associate Developer certification demonstrating proficiency in database design, development, and query optimization.",
      issueDate: "09 FEB 2026",
      verifyLink: "https://www.credly.com/go/bYwYT2DF",
      year: "2026",
      type: "Technical Certification",
      icon: Award,
      color: "from-green-400 to-teal-400",
    },
  ],
  recognition: [
    {
      id: 1,
      title: "Campus Hero",
      organization: "Coding Blocks",
      description:
        "Selected as a Campus Hero for Coding Blocks to bridge the gap between industry requirements and campus learning. Leading tech initiatives and promoting coding culture in the campus community.",
      year: "2026",
      type: "Leadership & Community",
      icon: Users,
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 2,
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
      id: 3,
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
  const { isDark } = useTheme();

  return (
    <div
      className="group relative card-brutal rounded-2xl p-4 theme-transition"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5 flex-1">
          <div
            className="p-2 rounded-xl"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <Icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3
                className="text-lg font-bold"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {achievement.title}
              </h3>

              {/* Buttons on right side of title for hackathons */}
              {type === "hackathons" &&
                (achievement.link || achievement.github) && (
                  <div className="flex gap-2 shrink-0">
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isDark ? "#ffffff" : "#000000",
                          backgroundColor: isDark ? "#ffffff" : "#000000",
                          color: isDark ? "#000000" : "#ffffff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--accent)";
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDark
                            ? "#ffffff"
                            : "#000000";
                          e.currentTarget.style.borderColor = isDark
                            ? "#ffffff"
                            : "#000000";
                          e.currentTarget.style.color = isDark
                            ? "#000000"
                            : "#ffffff";
                        }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {achievement.github && (
                      <a
                        href={achievement.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isDark ? "#ffffff" : "#000000",
                          backgroundColor: "transparent",
                          color: isDark ? "#ffffff" : "#000000",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--accent)";
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.borderColor = isDark
                            ? "#ffffff"
                            : "#000000";
                          e.currentTarget.style.color = isDark
                            ? "#ffffff"
                            : "#000000";
                        }}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                )}

              {/* Credential button for certifications */}
              {type === "certifications" && achievement.verifyLink && (
                <div className="flex gap-2 shrink-0">
                  <a
                    href={achievement.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300"
                    style={{
                      borderColor: isDark ? "#ffffff" : "#000000",
                      backgroundColor: isDark ? "#ffffff" : "#000000",
                      color: isDark ? "#000000" : "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--accent)";
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = isDark
                        ? "#ffffff"
                        : "#000000";
                      e.currentTarget.style.borderColor = isDark
                        ? "#ffffff"
                        : "#000000";
                      e.currentTarget.style.color = isDark
                        ? "#000000"
                        : "#ffffff";
                    }}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>

            <div>
              {achievement.organization && (
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {achievement.organization}
                </p>
              )}
              {achievement.achievement && (
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {achievement.achievement}
                </p>
              )}
            </div>
          </div>
        </div>
        <span
          className="px-3 py-1.5 rounded-full text-xs font-bold theme-transition shrink-0 ml-3"
          style={{
            backgroundColor: "var(--accent)",
            color: "#ffffff",
          }}
        >
          {achievement.year}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-snug mb-3"
        style={{ color: "var(--text-secondary)" }}
      >
        {achievement.description}
      </p>

      {/* Special content based on type */}
      {type === "openSource" && achievement.badge && (
        <div className="mb-3">
          <div
            className="flex items-center gap-2 text-xs mb-1.5"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="font-medium">Authenticity Key:</span>
            <span
              className="font-mono px-2 py-0.5 rounded-md text-xs"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--green-accent)",
              }}
            >
              {achievement.badge}
            </span>
          </div>
          {achievement.website && (
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span>Website:</span>
              <a
                href={`https://${achievement.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="hover:underline"
              >
                {achievement.website}
              </a>
            </div>
          )}
          {achievement.link && (
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span>ECWoC ID Card:</span>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="hover:underline"
              >
                View ID Card
              </a>
            </div>
          )}
        </div>
      )}

      {type === "hackathons" && achievement.tech && (
        <div className="mb-3" style={{ display: "none" }}>
          <div className="flex flex-wrap gap-1.5">
            {achievement.tech.map((tech) => (
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
        </div>
      )}

      {/* Certification details */}
      {type === "certifications" && achievement.issueDate && (
        <div className="mb-3" style={{ display: "none" }}>
          <div
            className="flex items-center gap-2 text-sm mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="font-medium">Issued:</span>
            <span style={{ color: "var(--accent)" }}>
              {achievement.issueDate}
            </span>
          </div>
          {achievement.verifyLink && (
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="font-medium">Verify:</span>
              <a
                href={achievement.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                className="hover:underline"
              >
                View Credential
              </a>
            </div>
          )}
        </div>
      )}

      {/* Status badge */}
      {achievement.status && (
        <div className="mb-4">
          <span
            className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor:
                achievement.status === "Active"
                  ? "var(--green-accent-dim)"
                  : "var(--bg-secondary)",
              color:
                achievement.status === "Active"
                  ? "var(--green-accent)"
                  : "var(--text-muted)",
              border: `1px solid ${
                achievement.status === "Active"
                  ? "var(--green-accent)"
                  : "var(--border-color)"
              }`,
            }}
          >
            {achievement.status}
          </span>
        </div>
      )}

      {/* Action Links - Only for non-hackathon types */}
      {type !== "hackathons" && (achievement.link || achievement.github) && (
        <div className="flex gap-2">
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs py-2 px-3 rounded-full border transition-all duration-300 font-semibold"
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
                e.currentTarget.style.backgroundColor = isDark
                  ? "#ffffff"
                  : "#000000";
                e.currentTarget.style.borderColor = isDark
                  ? "#ffffff"
                  : "#000000";
                e.currentTarget.style.color = isDark ? "#000000" : "#ffffff";
              }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {achievement.github && (
            <a
              href={achievement.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs py-2 px-3 rounded-full border transition-all duration-300 font-semibold"
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
                e.currentTarget.style.borderColor = isDark
                  ? "#ffffff"
                  : "#000000";
                e.currentTarget.style.color = isDark ? "#ffffff" : "#000000";
              }}
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const SectionHeader = ({ title, description, icon: Icon }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2.5 mb-2">
      <Icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
      <h3
        className="text-xl font-bold"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>
    </div>
    <p style={{ color: "var(--text-muted)" }} className="text-sm leading-snug">
      {description}
    </p>
  </div>
);

const Achievements = () => {
  const { isDark } = useTheme();
  const scrollAnimationProps = useScrollAnimation();

  return (
    <section
      id="achievements"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden theme-transition"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, var(--text-muted) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            My <span style={{ color: "var(--accent)" }}>Achievements</span>
          </motion.h2>
          <div
            className="w-24 h-1 mx-auto mb-4"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            A showcase of my certifications, hackathon victories, and community
            recognition.
          </motion.p>
        </motion.div>

        {/* Certifications & Hackathons Section */}
        <div className="mb-10">
          <SectionHeader
            title="Certifications & Hackathons"
            description="Industry-recognized certifications and competitive achievements demonstrating technical expertise and problem-solving abilities."
            icon={Award}
          />
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievementsData.certifications.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                type="certifications"
                index={index}
              />
            ))}
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

        {/* Professional Recognition & Extracurricular Section */}
        <div>
          <SectionHeader
            title="Professional Recognition & Extracurricular"
            description="Leadership roles, community recognition, athletic achievements, and academic excellence beyond technical skills."
            icon={Trophy}
          />
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
