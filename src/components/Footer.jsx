import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

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
    <footer
      className="py-12 theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="text-xl font-bold mb-4 tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Pankaj Singh
        </div>
        <p className="mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
          Building digital experiences that make a difference
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "transparent",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#444444";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              aria-label={social.label}
            >
              <social.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <div
          className="pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <p style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Pankaj Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
