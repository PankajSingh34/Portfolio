import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const About = () => {
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
                className="font-semibold mb-8 tracking-tight"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "'Nanum Pen Script', cursive",
                  fontSize: "1.9rem",
                }}
              >
                My Story
              </motion.h3>

              {/* Each sentence on its own line like the reference */}
              {[
                <>
                  I'm{" "}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'Nanum Pen Script', cursive",
                    }}
                  >
                    Pankaj Singh
                  </span>
                  , a Computer Science Engineering student at{" "}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'Nanum Pen Script', cursive",
                    }}
                  >
                    Birla Institute of Applied Sciences, Bhimtal
                  </span>
                  .
                </>,
                <>
                  Originally from Ramnagar, Uttarakhand, I specialize in
                  full-stack development with a focus on building scalable web
                  applications and solving complex technical challenges.
                </>,
                <></>,
                <>
                  As an{" "}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'Nanum Pen Script', cursive",
                    }}
                  >
                    Open Source Contributor at Elite Coders
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'Nanum Pen Script', cursive",
                    }}
                  >
                    Coding Blocks Campus Hero
                  </span>
                  , I actively contribute to open-source projects and mentor
                  peers in technical initiatives.
                </>,
                <>
                  My tech stack includes React, Node.js, and MongoDB, which I
                  leverage to build scalable solutions.
                </>,
                <>
                  Recently, I competed in the{" "}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'Nanum Pen Script', cursive",
                    }}
                  >
                    NASA Space Hackathon
                  </span>
                  , where our team achieved 4th place among 30 teams.
                </>,
                <></>,
                <>
                  I'm focused on continuous learning and applying emerging
                  technologies to{" "}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'Nanum Pen Script', cursive",
                    }}
                  >
                    solve real-world problems
                  </span>
                  .
                </>,
                <>
                  Whether it's developing full-stack applications or optimizing
                  system performance, I approach each project with technical
                  rigor and attention to detail.
                </>,
              ].map((line, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "'Nanum Pen Script', cursive",
                    fontSize: "1.4rem",
                    lineHeight: 1.2,
                    marginBottom: "0.9rem",
                    minHeight: "1rem",
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
