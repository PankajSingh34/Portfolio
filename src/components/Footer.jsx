import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/PankajSingh34",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pankaj-singh-2a968b212/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:singhps588@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Pankaj Singh
        </div>
        <p className="text-gray-400 mb-6">
          Building digital experiences that make a difference
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            © 2024 Pankaj Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
