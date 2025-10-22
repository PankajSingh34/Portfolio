import React from "react";

// Icon components (you'll need to import these from lucide-react or define them)
const Code = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16,18 22,12 16,6"></polyline>
    <polyline points="8,6 2,12 8,18"></polyline>
  </svg>
);

const Palette = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="13.5" cy="6.5" r=".5"></circle>
    <circle cx="17.5" cy="10.5" r=".5"></circle>
    <circle cx="8.5" cy="7.5" r=".5"></circle>
    <circle cx="6.5" cy="12.5" r=".5"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

const Smartphone = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const Database = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="m3 5v14c0 3 4 6 9 6s9-3 9-6V5"></path>
    <path d="m3 12c0 3 4 6 9 6s9-3 9-6"></path>
  </svg>
);

const Cloud = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

const Globe = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building complete web applications",

      iconColor: "text-green-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful user experiences",

      iconColor: "text-green-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile solutions",
      iconColor: "text-green-400",
    },
  ];

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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className=" rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Who I Am ?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hi, I’m Pankaj Singh, a Computer Science Engineering student
                  at Veer Madho Singh Bhandari Uttarakhand Technical University.
                  I’m passionate about building impactful web applications and
                  creating innovative tech solutions that make a difference. I
                  specialize in full-stack development — particularly the MERN
                  stack — and enjoy turning ideas into responsive,
                  user-friendly, and scalable products.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Outside of academics, I serve as the Athletics Secretary of my
                  college, actively leading and participating in football and
                  gym activities. These experiences keep me disciplined,
                  energetic, and motivated. My ultimate goal is to work in a
                  product-based organization where I can contribute to building
                  technology that truly matters.
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
