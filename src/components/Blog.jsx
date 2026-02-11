import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogsData, blogCategories } from "../data/blogs";
import { useTheme } from "../context/ThemeContext";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const Blog = () => {
  const { isDark } = useTheme();
  const scrollAnimationProps = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedBlog, setExpandedBlog] = useState(null);

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === activeCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section
      id="blog"
      className="py-20 theme-transition"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...scrollAnimationProps}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Blog & <span style={{ color: "var(--accent)" }}>Articles</span>
          </motion.h2>
          <div
            className="w-24 h-1 mx-auto mb-4"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <motion.p
            variants={itemVariants}
            style={{ color: "var(--text-muted)" }}
            className="text-lg max-w-2xl mx-auto"
          >
            Sharing my knowledge and experiences in web development, AI, and
            software engineering.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2.5 rounded-lg text-sm font-bold border-2 cursor-pointer transition-all duration-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                borderColor: activeCategory === category ? "var(--accent)" : "#000000",
                backgroundColor: activeCategory === category ? "var(--accent)" : "#ffffff",
                color: activeCategory === category ? "#ffffff" : "#000000",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#000000";
                  e.currentTarget.style.color = "#000000";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Minimalist Article List */}
        <div className="space-y-4">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              {...scrollAnimationProps}
              variants={itemVariants}
            >
              <div
                className="article-item group cursor-pointer theme-transition"
                onClick={() =>
                  setExpandedBlog(expandedBlog === blog.id ? null : blog.id)
                }
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left: Title and meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      {blog.featured && (
                        <span
                          className="px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider text-white shrink-0"
                          style={{
                            backgroundColor: "var(--accent)",
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          Featured
                        </span>
                      )}
                      <span
                        className="px-2 py-0.5 rounded-md text-xs font-medium shrink-0"
                        style={{
                          backgroundColor: "var(--green-accent-dim)",
                          color: "var(--green-accent)",
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold transition-colors line-clamp-1"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {blog.title}
                    </h3>

                    <p
                      className="text-sm mt-1 line-clamp-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Right: Date + Read time */}
                  <div className="shrink-0 text-right">
                    <span
                      className="block text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      {formatDate(blog.date)}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs mt-0.5 justify-end"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Clock size={12} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform"
                    style={{
                      color: "var(--text-muted)",
                      transform:
                        expandedBlog === blog.id
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </div>

                {/* Expanded Content */}
                {expandedBlog === blog.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4"
                    style={{ borderTop: "1px solid var(--border-color)" }}
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border theme-transition"
                          style={{
                            borderColor: "var(--border-color)",
                            color: "var(--text-secondary)",
                            backgroundColor: "var(--bg-secondary)",
                          }}
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="prose prose-sm max-w-none">
                      <pre
                        className="whitespace-pre-wrap text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {blog.content}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
