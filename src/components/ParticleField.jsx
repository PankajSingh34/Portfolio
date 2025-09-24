import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const ParticleField = ({
  particleCount = 50,
  particleColor = "#60a5fa",
  connectionDistance = 150,
  className = "",
}) => {
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const initializeParticles = useCallback(() => {
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }
    setParticles(newParticles);
  }, [particleCount, dimensions]);

  const updateDimensions = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initializeParticles();
    }
  }, [dimensions, initializeParticles]);

  useEffect(() => {
    if (particles.length === 0) return;

    const animationFrame = requestAnimationFrame(function animate() {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx:
            particle.x <= 0 || particle.x >= dimensions.width
              ? -particle.vx
              : particle.vx,
          vy:
            particle.y <= 0 || particle.y >= dimensions.height
              ? -particle.vy
              : particle.vy,
        }))
      );

      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [particles.length, dimensions]);

  const renderConnections = () => {
    const connections = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = Math.sqrt(
          Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
        );

        if (distance < connectionDistance) {
          const opacity = 1 - distance / connectionDistance;
          connections.push(
            <line
              key={`${i}-${j}`}
              x1={particles[i].x}
              y1={particles[i].y}
              x2={particles[j].x}
              y2={particles[j].y}
              stroke={particleColor}
              strokeOpacity={opacity * 0.3}
              strokeWidth="1"
            />
          );
        }
      }
    }
    return connections;
  };

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        className="w-full h-full"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Render connections */}
        {renderConnections()}

        {/* Render particles */}
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particleColor}
            opacity="0.6"
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default ParticleField;
