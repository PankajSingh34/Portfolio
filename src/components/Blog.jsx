import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogsData, blogCategories } from "../data/blogs";

const Blog = () => {
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
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog & <span className="text-green-400">Articles</span>
            <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing my knowledge and experiences in web development, AI, and
            software engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Blog */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {blogsData
              .filter((blog) => blog.featured)
              .slice(0, 1)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="relative group bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(blog.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-gray-400 mb-6 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setExpandedBlog(
                            expandedBlog === blog.id ? null : blog.id
                          )
                        }
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                      >
                        {expandedBlog === blog.id ? "Show Less" : "Read More"}
                        <ArrowRight
                          size={16}
                          className={`transform transition-transform ${
                            expandedBlog === blog.id ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Content */}
                      {expandedBlog === blog.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-700"
                        >
                          <div className="prose prose-invert prose-sm max-w-none">
                            <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
                              {blog.content}
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs
            .filter((blog) =>
              activeCategory === "All" ? !blog.featured : true
            )
            .map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-green-600/80 text-white text-xs font-medium rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(blog.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setExpandedBlog(expandedBlog === blog.id ? null : blog.id)
                    }
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                  >
                    {expandedBlog === blog.id ? "Show Less" : "Read Article"}
                    <ArrowRight
                      size={14}
                      className={`transform transition-transform ${
                        expandedBlog === blog.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedBlog === blog.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <div className="prose prose-invert prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap text-gray-300 text-xs leading-relaxed">
                          {blog.content}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* Social media section removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
