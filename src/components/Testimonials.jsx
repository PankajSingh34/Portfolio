import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tech Lead",
    role: "Senior Developer",
    company: "Project Collaboration",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Pankaj demonstrated exceptional problem-solving skills while working on our AI project. His ability to quickly grasp complex concepts and deliver clean, efficient code is impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Project Manager",
    role: "Team Lead",
    company: "Freelance Project",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Working with Pankaj was a great experience. He delivered the chat application ahead of schedule with excellent quality. Highly recommend for any full-stack development work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fellow Developer",
    role: "Software Engineer",
    company: "Open Source",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Pankaj's contributions to our open-source project were invaluable. His code is well-documented, and he's always willing to help others understand the codebase.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-4">
            💬 Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People <span className="text-green-400">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from colleagues and collaborators I've worked with.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-green-500/20 rounded-full">
                  <Quote className="w-8 h-8 text-green-400" />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-400 mb-4"
                />
                <h4 className="text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-green-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-green-400 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
