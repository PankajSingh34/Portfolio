import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building complete web applications",
      bgColor: "bg-blue-900/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful user experiences",
      bgColor: "bg-purple-900/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile solutions",
      bgColor: "bg-green-900/20",
      iconColor: "text-green-400",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a dedicated developer with a passion for creating innovative
                solutions. With expertise in modern web technologies, I bring
                ideas to life through clean code and intuitive design.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div
                  className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center border border-gray-700`}
                >
                  <feature.icon className={feature.iconColor} size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
