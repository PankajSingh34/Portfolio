import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Palette,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["React", "HTML", "JavaScript", "Tailwind CSS"],
      bgColor: "bg-blue-900/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Python", "Express"],
      bgColor: "bg-green-900/20",
      iconColor: "text-green-400",
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "SQL", "Redis"],
      bgColor: "bg-purple-900/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Cloud,
      title: "DevOps",
      skills: ["AWS", "Git"],
      bgColor: "bg-orange-900/20",
      iconColor: "text-orange-400",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["React Native"],
      bgColor: "bg-blue-900/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Globe,
      title: "Other",
      skills: ["Testing"],
      bgColor: "bg-indigo-900/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4 border border-gray-700`}
                >
                  <category.icon className={category.iconColor} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
