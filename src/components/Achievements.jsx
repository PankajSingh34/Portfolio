import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Trophy,
} from "lucide-react";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const CodingBlocksIcon = () => (
  <img
    src="/images/cblogo.webp"
    alt="Coding Blocks"
    className="w-5 h-5"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      borderRadius: "2px",
      padding: "2px",
      backgroundColor: "var(--bg-primary)",
    }}
  />
);
const MongoDBIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    alt="MongoDB"
    className="w-5 h-5"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  />
);
const OracleIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
    alt="Oracle"
    className="w-5 h-5"
    style={{ display: "inline-block", verticalAlign: "middle" }}
  />
);
const NasaIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
    alt="NASA"
    className="w-5 h-5"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      objectFit: "contain",
    }}
  />
);
const EliteCodersIcon = () => (
  <img
    src="https://code.elitecoders.xyz/favicon.ico"
    alt="Elite Coders"
    className="w-5 h-5"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      borderRadius: "3px",
      objectFit: "contain",
    }}
  />
);
const AthleticsIcon = () => (
  <img
    src="/images/athletic.jpg"
    alt="Athletics"
    className="w-5 h-5"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      borderRadius: "50%",
      objectFit: "cover",
    }}
  />
);
const BiasIcon = () => (
  <img
    src="/images/bias-logo.png"
    alt="BIAS Bhimtal"
    className="w-5 h-5"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      borderRadius: "3px",
      objectFit: "contain",
    }}
  />
);

const achievementsData = {
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
      icon: MongoDBIcon,
    },
    {
      id: 2,
      title: "OCI 2025 Certified DevOps Professional",
      organization: "Oracle",
      description:
        "Earned Oracle Cloud Infrastructure 2025 Certified DevOps Professional certification demonstrating expertise in CI/CD pipelines, infrastructure as code, and cloud-native DevOps practices on OCI.",
      year: "2025",
      type: "Technical Certification",
      verifyLink:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=EF8CD13BD28229AC851E88EA1D964222AD5FBA3C2C1401BE9EFB8B001E2F4ACA",
      icon: OracleIcon,
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
      icon: NasaIcon,
    },
  ],
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
      icon: EliteCodersIcon,
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
      icon: CodingBlocksIcon,
    },
    {
      id: 2,
      title: "Athletics Secretary",
      organization: "BIAS Bhimtal (2025-2026)",
      description:
        "Elected as Athletics Secretary at BIAS Bhimtal, leading sports activities and organizing inter-college tournaments. Won 5 medals in athletics events showcasing exceptional athletic performance and leadership in sports management.",
      year: "2025-2026",
      type: "Leadership",
      icon: BiasIcon,
    },
    {
      id: 3,
      title: "Academic Excellence",
      organization: "BIAS Bhimtal",
      description:
        "Achieved Department Rank 5 at BIAS Bhimtal, placing among the top 3% of students in the department. Recognized for outstanding academic performance and consistent excellence throughout the program.",
      year: "2025",
      type: "Academic Excellence",
      icon: BiasIcon,
    },
  ],
};

const highlightText = (text) => {
  if (!text) return text;
  return text
    .split(
      /((?<!\w)\d[\d,.%+\/x-]*\+?(?=\s|,|\.|\))|(?<!\w)(?:merged|selected|earned|secured|elected|won|contributed|certified|demonstrated|proficiency|expertise|4th place|top 3%|medals?|rank \d+|department rank|open source|real-time|collaborative|concurrent|scalable|active|ci\/cd|devops|infrastructure|audit|astrobiology|simulation|authentication|collaboration|campus hero|athletics secretary|academic excellence|ECWoC|MERN|JWT|Socket\.io|MongoDB|React\.js|Node\.js|Oracle|OCI|NASA)(?!\w))/gi,
    )
    .map((part, i) =>
      /^(?:\d[\d,.%+\/x-]*\+?$|merged|selected|earned|secured|elected|won|contributed|certified|demonstrated|proficiency|expertise|4th place|top 3%|medals?|rank \d*|department rank|open source|real-time|collaborative|concurrent|scalable|active|ci\/cd|devops|infrastructure|audit|astrobiology|simulation|authentication|collaboration|campus hero|athletics secretary|academic excellence|ECWoC|MERN|JWT|Socket\.io|MongoDB|React\.js|Node\.js|Oracle|OCI|NASA)$/i.test(
        part.trim(),
      ) && part.trim() ? (
        <strong key={i} style={{ color: "var(--text-primary)" }}>
          {part}
        </strong>
      ) : (
        part
      ),
    );
};

const AchievementCard = ({ achievement, type, onClick }) => {
  const Icon = achievement.icon;
  return (
    <motion.div
      layoutId={`card-${achievement.id}-${type}`}
      onClick={onClick}
      className="group relative rounded-2xl p-5 theme-transition shrink-0 flex flex-col cursor-pointer snap-start"
      style={{
        backgroundColor: "var(--bg-card)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        width: "min(300px, 80vw)",
        height: "400px",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at top right, var(--accent), transparent 70%)",
        }}
      />

      <div className="flex items-start justify-between mb-3 relative z-10">
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <div className="p-2 rounded-lg shrink-0">
            <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-base font-bold tracking-tight mb-1.5 line-clamp-2"
              style={{ color: "var(--text-primary)" }}
            >
              {achievement.title}
            </h3>
            <div className="mb-1">
              {achievement.organization && (
                <p
                  className="text-xs font-semibold line-clamp-1"
                  style={{ color: "var(--accent)" }}
                >
                  {achievement.organization}
                </p>
              )}
              {achievement.achievement && (
                <p
                  className="text-xs font-semibold line-clamp-1"
                  style={{ color: "var(--accent)" }}
                >
                  {achievement.achievement}
                </p>
              )}
            </div>
          </div>
        </div>
        <span
          className="px-2.5 py-1 rounded-full text-[10px] font-semibold shrink-0"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {achievement.year}
        </span>
      </div>

      <p
        className="text-xs leading-relaxed mb-3 relative z-10 line-clamp-4 grow"
        style={{ color: "var(--text-secondary)" }}
      >
        {highlightText(achievement.description)}
      </p>

      {type === "openSource" && achievement.badge && (
        <div className="mb-3 relative z-10">
          <div
            className="flex items-center gap-1.5 text-[10px]"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="font-medium">Key:</span>
            <span
              className="font-mono px-1.5 py-0.5 rounded text-[9px]"
              style={{
                color: "var(--green-accent)",
              }}
            >
              {achievement.badge}
            </span>
          </div>
        </div>
      )}

      {achievement.status && (
        <div className="mb-3 relative z-10">
          <span
            className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
            style={{
              color:
                achievement.status === "Active"
                  ? "var(--green-accent)"
                  : "var(--text-muted)",
            }}
          >
            {achievement.status}
          </span>
        </div>
      )}

      {(type === "hackathons" || type === "certifications") &&
        (achievement.link || achievement.github || achievement.verifyLink) && (
          <div className="flex gap-2 relative z-10 mt-auto">
            {(achievement.link || achievement.verifyLink) && (
              <a
                href={achievement.link || achievement.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1 text-[11px] py-2 px-3 rounded-full transition-all duration-300 font-semibold"
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#000000";
                }}
              >
                <ExternalLink size={12} />
                {type === "certifications" ? "Verify" : "View"}
              </a>
            )}
            {achievement.github && (
              <a
                href={achievement.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1 text-[11px] py-2 px-3 rounded-full transition-all duration-300 font-semibold"
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#000000";
                }}
              >
                <Github size={12} />
                Code
              </a>
            )}
          </div>
        )}
    </motion.div>
  );
};

const AchievementModal = ({ achievement, type, onClose }) => {
  const Icon = achievement.icon;
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          layoutId={`card-${achievement.id}-${type}`}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 pointer-events-auto"
          style={{
            backgroundColor: "var(--bg-card)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg-elevated)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <X size={20} />
          </button>

          <div className="flex items-start gap-4 mb-6">
            <div
              className="p-3 rounded-xl shrink-0"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <Icon className="w-8 h-8" style={{ color: "var(--accent)" }} />
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {achievement.title}
              </h2>
              {achievement.organization && (
                <p
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {achievement.organization}
                </p>
              )}
              {achievement.achievement && (
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {achievement.achievement}
                </p>
              )}
            </div>
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold shrink-0"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-secondary)",
              }}
            >
              {achievement.year}
            </span>
          </div>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {highlightText(achievement.description)}
          </p>

          <div className="space-y-4">
            {type === "openSource" && achievement.badge && (
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Authenticity Key:
                  </span>
                  <span
                    className="font-mono px-3 py-1 rounded-lg text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      color: "var(--green-accent)",
                    }}
                  >
                    {achievement.badge}
                  </span>
                </div>
                {achievement.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <span style={{ color: "var(--text-muted)" }}>Website:</span>
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
              </div>
            )}
            {type === "hackathons" && achievement.tech && (
              <div>
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {achievement.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {type === "certifications" && achievement.issueDate && (
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span
                    className="font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Issued:
                  </span>
                  <span style={{ color: "var(--accent)" }}>
                    {achievement.issueDate}
                  </span>
                </div>
              </div>
            )}
            {achievement.status && (
              <span
                className="inline-block px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider"
                style={{
                  color:
                    achievement.status === "Active"
                      ? "var(--green-accent)"
                      : "var(--text-muted)",
                }}
              >
                {achievement.status}
              </span>
            )}
            {(achievement.link ||
              achievement.github ||
              achievement.verifyLink) && (
              <div className="flex gap-3 pt-4">
                {(achievement.link || achievement.verifyLink) && (
                  <a
                    href={achievement.link || achievement.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-5 rounded-full transition-all duration-300 font-semibold"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1a1a1a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#000000";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <ExternalLink size={16} />
                    {type === "certifications"
                      ? "Verify Credential"
                      : "View Project"}
                  </a>
                )}
                {achievement.github && (
                  <a
                    href={achievement.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-5 rounded-full transition-all duration-300 font-semibold"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1a1a1a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#000000";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const Achievements = () => {
  const scrollAnimationProps = useScrollAnimation();
  const [selectedCard, setSelectedCard] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 300 + 16; // card width + gap
    el.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="achievements"
      className="py-16 relative theme-transition"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, var(--text-muted) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            My Achievements
          </motion.h2>
          <div className="section-divider mb-4" />
          <motion.p
            variants={itemVariants}
            className="text-base max-w-2xl mx-auto mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            A showcase of my certifications, hackathon victories, and community
            recognition.
          </motion.p>

          {/* Arrow buttons — centered below subtitle */}
          <motion.div
            variants={itemVariants}
            className="flex justify-end gap-2"
          >
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
      </div>

      {/* Scroll row */}
      <style>{`
        .achievements-scroll::-webkit-scrollbar { display: none; }
        .achievements-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .achievements-scroll { scroll-padding-left: 16px; }
        @media (min-width: 640px)  { .achievements-scroll { scroll-padding-left: 24px; } }
        @media (min-width: 1024px) { .achievements-scroll { scroll-padding-left: max(32px, calc((100vw - 1280px) / 2 + 32px)); } }
      `}</style>
      <div
        ref={scrollRef}
        className="achievements-scroll relative z-10 flex gap-4 overflow-x-auto py-6 pb-8 snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
      >
        <div
          className="shrink-0 w-4 sm:w-6"
          style={{ minWidth: "max(16px, calc((100vw - 1280px) / 2 + 32px))" }}
        />
        {achievementsData.certifications.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            type="certifications"
            index={index}
            onClick={() =>
              setSelectedCard({ achievement, type: "certifications" })
            }
          />
        ))}
        {achievementsData.hackathons.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            type="hackathons"
            index={index}
            onClick={() => setSelectedCard({ achievement, type: "hackathons" })}
          />
        ))}
        {achievementsData.openSource.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            type="openSource"
            index={index}
            onClick={() => setSelectedCard({ achievement, type: "openSource" })}
          />
        ))}
        {achievementsData.recognition.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            type="recognition"
            index={index}
            onClick={() =>
              setSelectedCard({ achievement, type: "recognition" })
            }
          />
        ))}
        <div className="shrink-0 w-4 sm:w-6 lg:w-8" />
      </div>

      <AnimatePresence>
        {selectedCard && (
          <AchievementModal
            achievement={selectedCard.achievement}
            type={selectedCard.type}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
