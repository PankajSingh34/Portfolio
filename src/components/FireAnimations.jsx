import { motion } from "framer-motion";

// Option 1: Neon Glow Animation
export const NeonGlowFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* Neon circle */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-cyan-400"
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            "0 0 10px #22d3ee",
            "0 0 20px #06b6d4, 0 0 30px #0891b2",
            "0 0 10px #22d3ee",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner pulse */}
      <motion.div
        className="absolute inset-1 rounded-full bg-cyan-400/30"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Center dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Option 2: Matrix Digital Rain
export const MatrixFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* Digital rain lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 bg-green-400"
          style={{
            left: `${i * 20}%`,
            height: "100%",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Digital particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-300 rounded-sm"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
};

// Option 3: Plasma Energy Ball
export const PlasmaFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* Outer plasma ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(139,69,19,0.2) 70%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Middle energy layer */}
      <motion.div
        className="absolute inset-1 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(168,85,247,0.3) 60%, transparent 100%)",
        }}
        animate={{
          scale: [0.9, 1.3, 0.9],
          rotate: [360, 0],
        }}
        transition={{
          scale: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          },
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Core energy */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
          boxShadow: "0 0 10px #fbbf24",
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          boxShadow: [
            "0 0 10px #fbbf24",
            "0 0 20px #f59e0b, 0 0 30px #d97706",
            "0 0 10px #fbbf24",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Option 4: DNA Helix Animation
export const DNAHelixFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* DNA strands */}
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <motion.path
          d="M6 4 C12 8, 12 16, 18 20"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          animate={{
            pathLength: [0, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M18 4 C12 8, 12 16, 6 20"
          stroke="#06d6a0"
          strokeWidth="2"
          fill="none"
          animate={{
            pathLength: [0, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Connection lines */}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={i}
            x1={6 + i * 3}
            y1={6 + i * 3}
            x2={18 - i * 3}
            y2={6 + i * 3}
            stroke="#34d399"
            strokeWidth="1"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Option 5: Quantum Particles
export const QuantumFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* Quantum field */}
      <motion.div
        className="absolute inset-0 rounded-full border border-indigo-400/50"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          borderColor: [
            "rgba(129, 140, 248, 0.5)",
            "rgba(99, 102, 241, 0.8)",
            "rgba(129, 140, 248, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: `${15 + i * 5}px 0`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            rotate: { duration: 2 + i * 0.5, repeat: Infinity, ease: "linear" },
            scale: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            },
          }}
        />
      ))}

      {/* Center nucleus */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            "0 0 5px #a5b4fc",
            "0 0 15px #818cf8, 0 0 25px #6366f1",
            "0 0 5px #a5b4fc",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Option 6: Geometric Pulse
export const GeometricFire = () => {
  return (
    <div className="relative w-6 h-6 mr-3">
      {/* Rotating hexagon */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <motion.polygon
            points="12,2 20,7 20,17 12,22 4,17 4,7"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            animate={{
              strokeWidth: [2, 4, 2],
              stroke: ["#f97316", "#ea580c", "#dc2626", "#f97316"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Inner triangle */}
      <motion.div
        className="absolute inset-2"
        animate={{
          rotate: [360, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <motion.polygon
            points="12,6 18,18 6,18"
            fill="#fb923c"
            animate={{
              fill: ["#fb923c", "#f97316", "#ea580c", "#fb923c"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};
