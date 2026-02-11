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
        borderTop: "2px solid var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="text-2xl font-black mb-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "var(--text-primary)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>P</span>ankaj
          <span style={{ color: "var(--accent)" }}>.</span>
        </div>
        <p className="mb-6" style={{ color: "var(--text-muted)" }}>
          Building digital experiences that make a difference
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="w-14 h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center hover:scale-110"
              style={{
                borderColor: "#000000",
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.borderColor = "#000000";
                e.currentTarget.style.color = "#000000";
              }}
              aria-label={social.label}
            >
              <social.icon size={26} strokeWidth={2} />
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
