import React from "react";
import { Code, Palette, Smartphone } from "lucide-react";

const About = () => {
  const features = [];

  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </div>

          <div className="w-full">
            <div>
              <div className="w-full rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  My Story
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hey! I’m <span className="text-green-400 font-semibold">Pankaj Singh</span>—a builder, a problem solver, and a lifelong learner. My journey in tech started with curiosity and a knack for tinkering, but quickly grew into a passion for creating things that make life easier, smarter, and more fun.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I’m currently pursuing Computer Science Engineering at Veer Madho Singh Bhandari Uttarakhand Technical University. Whether it’s a hackathon project, a freelance gig, or a personal experiment, I love the thrill of turning ideas into real, working products. My favorite playground? The MERN stack—where I get to blend logic, creativity, and a bit of magic.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Beyond the screen, I’m the Athletics Secretary at my college, a football enthusiast, and a gym regular. Sports have taught me discipline, teamwork, and how to push through challenges—skills I bring to every line of code I write.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
