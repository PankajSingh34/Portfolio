import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const About = () => {
  const { isDark } = useTheme();
  const scrollAnimationProps = useScrollAnimation();

  return (
    <div>
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 theme-transition"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
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
              About Me
            </motion.h2>
            <div className="section-divider mb-2" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Story */}
            <motion.div {...scrollAnimationProps} variants={containerVariants}>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold mb-4 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                My Story
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Pankaj Singh
                </span>
                , a Computer Science Engineering student at{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Birla Institute of Applied Sciences, Bhimtal
                </span>
                . Originally from Ramnagar, Uttarakhand, I specialize in full-stack
                development with a focus on building scalable web applications and
                solving complex technical challenges.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                As an{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Open Source Contributor at Elite Coders
                </span>{" "}
                and{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Coding Blocks Campus Hero
                </span>
                , I actively contribute to open-source projects and mentor peers in
                technical initiatives. My tech stack includes React, Node.js, and
                MongoDB, which I leverage to build scalable solutions. Recently, I
                competed in the{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  NASA Space Hackathon
                </span>
                , where our team achieved 4th place among 30 teams.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm focused on continuous learning and applying emerging
                technologies to{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  solve real-world problems
                </span>
                . Whether it's developing full-stack applications or optimizing
                system performance, I approach each project with technical rigor
                and attention to detail.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
