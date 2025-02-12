import { motion } from "framer-motion";

export function AiIllustration() {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[400px] h-[400px]" // Reduced size
      role="img"
      aria-label="AI Technology Illustration"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Grid */}
      <motion.g opacity="0.2">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`horizontal-${i}`}
            x1="0"
            y1={i * 40}
            x2="400"
            y2={i * 40}
            stroke="#4A90E2"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`vertical-${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="400"
            stroke="#4A90E2"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </motion.g>

      {/* Circuit Board Background */}
      <motion.path
        d="M50 200h300M200 50v300"
        stroke="#4A90E2"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Data Flow Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.circle
          key={`data-flow-${i}`}
          r="3"
          fill="#4A90E2"
          initial={{ 
            opacity: 0,
            pathLength: 0,
            offsetDistance: "0%"
          }}
          animate={{ 
            opacity: [0, 1, 0],
            offsetDistance: "100%"
          }}
          transition={{
            duration: 2,
            delay: i * 0.25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            offsetPath: `path("M${50 + i * 40} 50 Q200 ${150 + i * 20} ${350 - i * 40} 350")`
          }}
        />
      ))}

      {/* Central Circle - Robot Head */}
      <motion.circle
        cx="200"
        cy="200"
        r="80"
        fill="#FFFFFF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Robot Eye with Scanning Effect */}
      <motion.circle
        cx="200"
        cy="180"
        r="25"
        fill="#FF4081"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.1, 1],
          filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="200"
        cy="180"
        r="12"
        fill="#FFFFFF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />

      {/* Scanning Line in Eye */}
      <motion.line
        x1="185"
        y1="180"
        x2="215"
        y2="180"
        stroke="#FF4081"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [175, 185, 175]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Enhanced Antenna */}
      <motion.path
        d="M200 120l15-25M200 120l-15-25"
        stroke="#4A90E2"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.circle
        cx="200"
        cy="95"
        r="5"
        fill="#4A90E2"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Circuit Patterns */}
      <motion.path
        d="M120 200h-40M280 200h40"
        stroke="#4A90E2"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />

      {/* Enhanced Floating Elements */}
      {[
        { cx: 140, cy: 160, delay: 0 },
        { cx: 260, cy: 160, delay: 0.3 },
        { cx: 200, cy: 260, delay: 0.6 }
      ].map((circle, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={circle.cx}
            cy={circle.cy}
            r="15"
            fill="#FFFFFF"
            opacity="0.8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2,
              delay: circle.delay,
              repeat: Infinity
            }}
          />
          <motion.circle
            cx={circle.cx}
            cy={circle.cy}
            r="8"
            stroke="#4A90E2"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5,
              delay: circle.delay,
              repeat: Infinity
            }}
          />
        </motion.g>
      ))}

      {/* Enhanced Digital Particles */}
      {[
        { cx: 150, cy: 100 },
        { cx: 250, cy: 100 },
        { cx: 150, cy: 300 },
        { cx: 250, cy: 300 }
      ].map((pos, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={pos.cx}
            cy={pos.cy}
            r="5"
            fill="#4A90E2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
          <motion.circle
            cx={pos.cx}
            cy={pos.cy}
            r="8"
            stroke="#4A90E2"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity
            }}
          />
        </motion.g>
      ))}

      {/* Enhanced Connection Lines */}
      <motion.path
        d="M150 100q50 50 100 0M150 300q50-50 100 0"
        stroke="#4A90E2"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Pulse Rings */}
      {[40, 60, 80].map((radius, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx="200"
          cy="200"
          r={radius}
          stroke="#4A90E2"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity
          }}
        />
      ))}
    </motion.svg>
  );
}