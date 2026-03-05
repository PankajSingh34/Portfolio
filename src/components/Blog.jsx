import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogsData } from "../data/blogs";
import {
  containerVariants,
  itemVariants,
  useScrollAnimation,
} from "../utils/animations";

const Blog = () => {
  const scrollAnimationProps = useScrollAnimation();
  const [expandedBlog, setExpandedBlog] = useState(null);

  const filteredBlogs = blogsData;

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
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Blog & Articles
          </motion.h2>
          <div className="section-divider mb-4" />
          <motion.p
            variants={itemVariants}
            style={{ color: "var(--text-muted)" }}
            className="text-lg max-w-2xl mx-auto"
          >
            Sharing my knowledge and experiences in web development, AI, and
            software engineering.
          </motion.p>
        </motion.div>

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
                    <h3
                      className="text-lg font-semibold transition-colors line-clamp-1 tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {blog.title}
                    </h3>

                    <p
                      className="text-sm mt-1 line-clamp-1"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "'Nanum Pen Script', cursive",
                        fontSize: "1.15rem",
                      }}
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
                    {/* Blog Title inside expanded */}
                    <h2
                      className="mb-3 text-xl font-semibold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {blog.title}
                    </h2>

                    <div
                      className="blog-handwritten mt-2"
                      style={{ fontFamily: "'Nanum Pen Script', cursive" }}
                    >
                      {blog.content
                        .trim()
                        .split("\n")
                        .reduce((acc, line, i, arr) => {
                          // Skip consecutive blank lines — only allow one gap
                          if (line.trim() === "" && arr[i - 1]?.trim() === "")
                            return acc;
                          if (line.startsWith("## ")) {
                            acc.push(
                              <h2
                                key={i}
                                style={{
                                  fontFamily: "'Nanum Pen Script', cursive",
                                }}
                              >
                                {line.replace("## ", "")}
                              </h2>,
                            );
                          } else if (line.trim() === "") {
                            acc.push(<br key={i} />);
                          } else {
                            const parts = line.split(/\*\*(.*?)\*\*/g);
                            acc.push(
                              <p
                                key={i}
                                style={{
                                  margin: "0.05rem 0",
                                  fontFamily: "'Nanum Pen Script', cursive",
                                }}
                              >
                                {parts.map((part, j) =>
                                  j % 2 === 1 ? (
                                    <strong
                                      key={j}
                                      style={{
                                        fontFamily:
                                          "'Nanum Pen Script', cursive",
                                      }}
                                    >
                                      {part}
                                    </strong>
                                  ) : (
                                    part
                                  ),
                                )}
                              </p>,
                            );
                          }
                          return acc;
                        }, [])}
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
