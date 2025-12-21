import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight, Flame } from "lucide-react";

const journeySteps = [
  {
    year: "2023",
    title: "Athletic Secretary",
    description:
      "Took on the responsibility of leading sports activities at college. Started organizing events, managing teams, and bringing students together through sports. Led the planning and execution of multiple inter-college tournaments, coordinated with teams, and created memorable experiences for hundreds of students.",
    highlight: "Leadership Role",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "My Gym Journey",
    description:
      "Made a commitment to transform myself. Hit the gym consistently, learned about nutrition, and developed discipline that now reflects in my coding habits too. Found the perfect balance between my passion for technology and athletics — the discipline from sports makes me a better developer.",
    highlight: "Self Improvement",
    icon: Star,
  },
];

const BeyondCode = () => {
  return (
    <section id="beyond-code" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-4">
            Beyond Code
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Life is more than just code. Here's a glimpse into my athletic
            journey and what drives me beyond the keyboard.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-green-500/30 shadow-2xl shadow-green-500/10 max-w-md">
              <img
                src="/images/athletic.jpg"
                alt="Pankaj Singh - Athletic"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80";
                }}
              />
              {/* Overlay Badge and Decorative Elements removed as requested */}
            </div>
          </motion.div>

          {/* Journey Blog Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Blog Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="p-2 bg-green-500/20 rounded-lg">
                  <Flame className="w-6 h-6 text-green-400" />
                </span>
                The Athlete Within
              </h3>
              <p className="text-gray-400">
                From a regular student to Athletic Secretary — here's how sports
                shaped who I am today.
              </p>
            </div>

            {/* Timeline/Journey Cards */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-green-500/20" />

              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Card */}
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    {/* Year & Highlight */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                        {step.year}
                      </span>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full flex items-center gap-1">
                        <step.icon size={12} />
                        {step.highlight}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      {step.title}
                      <ArrowRight size={16} className="text-green-400" />
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic font-light max-w-3xl mx-auto">
            "The discipline from sports translates directly to coding —
            <span className="text-green-400">
              {" "}
              consistency, practice, and never giving up.
            </span>
            "
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondCode;
