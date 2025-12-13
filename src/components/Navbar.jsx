import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Fire Flame Animation
const AnimatedFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* Main flame */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          rotate: [0, 2, -3, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {/* Outer flame */}
          <motion.path
            d="M12 22C12 22 6 18 6 12C6 6 10 1 12 2C14 1 18 6 18 12C18 18 12 22 12 22Z"
            fill="url(#fireGradient1)"
            animate={{
              d: [
                "M12 22C12 22 6 18 6 12C6 6 10 1 12 2C14 1 18 6 18 12C18 18 12 22 12 22Z",
                "M12 22C12 22 7 17 7 11C7 5 9 2 12 2C15 2 17 5 17 11C17 17 12 22 12 22Z",
                "M12 22C12 22 5 19 5 13C5 7 11 0 12 2C13 0 19 7 19 13C19 19 12 22 12 22Z",
                "M12 22C12 22 6 18 6 12C6 6 10 1 12 2C14 1 18 6 18 12C18 18 12 22 12 22Z",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle flame */}
          <motion.path
            d="M12 18C12 18 8 15 8 11C8 7 10 5 12 5C14 5 16 7 16 11C16 15 12 18 12 18Z"
            fill="url(#fireGradient2)"
            animate={{
              d: [
                "M12 18C12 18 8 15 8 11C8 7 10 5 12 5C14 5 16 7 16 11C16 15 12 18 12 18Z",
                "M12 18C12 18 9 14 9 10C9 6 11 6 12 5C13 6 15 6 15 10C15 14 12 18 12 18Z",
                "M12 18C12 18 7 16 7 12C7 8 12 4 12 5C12 4 17 8 17 12C17 16 12 18 12 18Z",
                "M12 18C12 18 8 15 8 11C8 7 10 5 12 5C14 5 16 7 16 11C16 15 12 18 12 18Z",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Inner flame core */}
          <motion.path
            d="M12 14C12 14 10 12 10 9C10 6 11 7 12 7C13 7 14 6 14 9C14 12 12 14 12 14Z"
            fill="url(#fireGradient3)"
            animate={{
              scale: [1, 1.2, 0.8, 1.1, 1],
              opacity: [0.9, 1, 0.7, 0.95, 0.9],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            }}
          />

          {/* Fire gradients */}
          <defs>
            <linearGradient
              id="fireGradient1"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="25%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
            <linearGradient
              id="fireGradient2"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#b91c1c" />
              <stop offset="30%" stopColor="#dc2626" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient
              id="fireGradient3"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#991b1b" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fffbeb" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Flame particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${35 + i * 8}%`,
            bottom: `${5 + i * 3}%`,
            backgroundColor: i % 2 === 0 ? "#f59e0b" : "#fbbf24",
          }}
          animate={{
            y: [0, -15 - i * 2, 0],
            x: [0, Math.sin(i) * 3, 0],
            opacity: [0, 0.8, 0],
            scale: [0.3, 1, 0.2],
          }}
          transition={{
            duration: 1.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Heat shimmer */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flame flicker effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: [
            "brightness(1) hue-rotate(0deg)",
            "brightness(1.1) hue-rotate(5deg)",
            "brightness(0.9) hue-rotate(-3deg)",
            "brightness(1.05) hue-rotate(2deg)",
            "brightness(1) hue-rotate(0deg)",
          ],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

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
            <AnimatedFire />
            Pankaj Singh
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-green-400 font-semibold"
                    : "text-gray-300 hover:text-green-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              className="p-2 text-gray-300 hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                    className={`block w-full text-left py-4 px-4 rounded-lg transition-all duration-300 cursor-pointer select-none touch-manipulation ${
                      activeSection === item.id
                        ? "bg-green-900/20 text-green-400 font-semibold"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-green-400 active:bg-gray-700"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{
                      scale: 0.98,
                      backgroundColor: "rgba(75, 85, 99, 0.8)",
                    }}
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
