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
              className="text-4xl md:text-5xl font-black mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "var(--text-primary)",
              }}
            >
              About <span style={{ color: "var(--accent)" }}>Me</span>
            </motion.h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Double-border profile picture */}
            <motion.div
              {...scrollAnimationProps}
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="double-border-frame inline-block">
                <div className="double-border-frame-inner">
                  <img
                    src="/images/athletic.jpg"
                    alt="Pankaj Singh"
                    className="w-72 h-80 sm:w-80 sm:h-96 object-cover block"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Story + Stats */}
            <motion.div {...scrollAnimationProps} variants={containerVariants}>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                My Story
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                Hey! I'm{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Pankaj Singh
                </span>
                —a builder, a problem solver, and a lifelong learner. My journey
                in tech started with curiosity and a knack for tinkering, but
                quickly grew into a passion for creating things that make life
                easier, smarter, and more fun.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm currently pursuing Computer Science Engineering at Veer
                Madho Singh Bhandari Uttarakhand Technical University. Whether
                it's a hackathon project, a freelance gig, or a personal
                experiment, I love the thrill of turning ideas into real,
                working products.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Beyond the screen, I'm the Athletics Secretary at my college, a
                football enthusiast, and a gym regular. Sports have taught me
                discipline, teamwork, and how to push through challenges—skills
                I bring to every line of code I write.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
