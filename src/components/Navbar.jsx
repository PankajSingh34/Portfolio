import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";

// Removed custom AnimatedFire, using Lucide Flame icon instead

// ...existing code...

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const currentSection = sections.find((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log(`Scrolling to section: ${sectionId}`);
    const element = document.getElementById(sectionId);

    if (element) {
      console.log(`Element found for ${sectionId}`);

      // Close mobile menu first
      setIsMenuOpen(false);

      // Use a timeout to ensure menu closes before scrolling
      setTimeout(() => {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    } else {
      console.log(`Element not found for ${sectionId}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center text-2xl font-bold text-green-400"
          >
            <Flame className="w-6 h-6 mr-3 text-orange-400" />
            Pankaj Singh
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 cursor-pointer ${
                  activeSection === item.id
                    ? "text-green-400 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`Mobile nav clicked: ${item.id}`);
                      scrollToSection(item.id);
                    }}
                    onTouchStart={(e) => e.preventDefault()}
                    className={`block w-full text-left py-4 px-4 rounded-lg cursor-pointer select-none touch-manipulation ${
                      activeSection === item.id
                        ? "bg-green-900/20 text-green-400 font-semibold"
                        : "text-gray-300"
                    }`}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      touchAction: "manipulation",
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
