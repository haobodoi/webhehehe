import { motion, useReducedMotion } from "framer-motion";

const pearls = [
  [112, 292, 10],
  [146, 306, 8],
  [177, 286, 9],
  [130, 327, 8],
  [165, 329, 10],
  [101, 326, 7],
  [191, 319, 7],
  [147, 280, 6],
  [120, 274, 7],
  [184, 341, 7],
];

export default function DrinkVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="drink-stage" aria-hidden="true">
      <motion.div
        className="drink-orbit orbit-a"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="drink-orbit orbit-b"
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <img
        className="drink-photo"
        src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=85"
        alt=""
      />
      <motion.svg
        className="drink-svg"
        viewBox="0 0 300 420"
        role="img"
        aria-label="Ly trà sữa cách điệu"
        initial={{ y: 12, rotate: -2 }}
        animate={reduce ? {} : { y: [-5, 7, -5], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="tea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#e9cda5" />
            <stop offset="0.45" stopColor="#c28d58" />
            <stop offset="1" stopColor="#815839" />
          </linearGradient>
          <linearGradient id="cupShade" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".86" />
            <stop offset=".48" stopColor="#ffffff" stopOpacity=".35" />
            <stop offset="1" stopColor="#dbe8df" stopOpacity=".72" />
          </linearGradient>
          <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="20"
              stdDeviation="14"
              floodColor="#001d12"
              floodOpacity=".28"
            />
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <path d="M94 84 L125 24 L141 31 L119 88" fill="#d7c39a" />
          <path
            d="M62 104 Q150 86 238 104 L216 354 Q150 382 84 354 Z"
            fill="url(#cupShade)"
            stroke="#ffffff"
            strokeOpacity=".8"
            strokeWidth="3"
          />
          <path
            d="M72 132 Q150 119 228 132 L211 336 Q150 355 89 336 Z"
            fill="url(#tea)"
            opacity=".96"
          />
          <ellipse
            cx="150"
            cy="131"
            rx="78"
            ry="14"
            fill="#f6ddbd"
            opacity=".82"
          />
          <g opacity=".96">
            {pearls.map(([cx, cy, r], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="#2c211b"
                animate={reduce ? {} : { cy: [cy, cy - ((i % 3) + 1) * 4, cy] }}
                transition={{
                  duration: 2.7 + (i % 3) * 0.5,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>
          <path
            d="M76 116 Q150 101 224 116"
            fill="none"
            stroke="#ffffff"
            strokeOpacity=".9"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle cx="150" cy="220" r="43" fill="#006241" opacity=".95" />
          <circle
            cx="150"
            cy="220"
            r="31"
            fill="none"
            stroke="#f4f0e7"
            strokeWidth="2"
            opacity=".9"
          />
          <path
            d="M136 225c12-6 13-18 14-27 3 13 7 22 18 29-10 9-22 12-32-2Z"
            fill="#f4f0e7"
            opacity=".95"
          />
        </g>
      </motion.svg>
      <motion.div
        className="float-chip chip-one"
        animate={reduce ? {} : { y: [0, -12, 0], rotate: [-6, 4, -6] }}
        transition={{ duration: 4.2, repeat: Infinity }}
      >
        Oolong
      </motion.div>
      <motion.div
        className="float-chip chip-two"
        animate={reduce ? {} : { y: [0, 10, 0], rotate: [5, -3, 5] }}
        transition={{ duration: 5.1, repeat: Infinity }}
      >
        Hojicha
      </motion.div>
    </div>
  );
}
