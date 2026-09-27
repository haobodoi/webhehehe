import { motion, useReducedMotion } from "framer-motion";
import starbucksLogo from "../images/starbuck.jpg";

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
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="drink-orbit orbit-b"
        animate={reduce ? {} : { rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.svg
        className="drink-svg"
        viewBox="0 0 300 420"
        role="img"
        aria-label="Ly trà sữa Starbucks"
        initial={{
          y: 12,
          rotate: -2,
        }}
        animate={
          reduce
            ? {}
            : {
                y: [-5, 7, -5],
                rotate: [-1.5, 1.5, -1.5],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="tea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#ead8ba" />
            <stop offset="0.42" stopColor="#c99762" />
            <stop offset="1" stopColor="#815839" />
          </linearGradient>

          <linearGradient id="cupShade" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".88" />

            <stop offset=".48" stopColor="#ffffff" stopOpacity=".30" />

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

          <clipPath id="logoClip">
            <circle cx="150" cy="220" r="43" />
          </clipPath>
        </defs>

        <g filter="url(#shadow)">
          {/* ỐNG HÚT */}
          <path d="M94 84 L125 24 L141 31 L119 88" fill="#d7c39a" />

          {/* THÂN LY */}
          <path
            d="M62 104 Q150 86 238 104 L216 354 Q150 382 84 354 Z"
            fill="url(#cupShade)"
            stroke="#ffffff"
            strokeOpacity=".8"
            strokeWidth="3"
          />

          {/* TRÀ SỮA */}
          <path
            d="M72 132 Q150 119 228 132 L211 336 Q150 355 89 336 Z"
            fill="url(#tea)"
            opacity=".96"
          />

          {/* BỀ MẶT */}
          <ellipse
            cx="150"
            cy="131"
            rx="78"
            ry="14"
            fill="#f6ddbd"
            opacity=".82"
          />

          {/* TRÂN CHÂU */}
          <g opacity=".96">
            {pearls.map(([cx, cy, r], index) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r={r}
                fill="#2c211b"
                animate={
                  reduce
                    ? {}
                    : {
                        cy: [cy, cy - ((index % 3) + 1) * 4, cy],
                      }
                }
                transition={{
                  duration: 2.7 + (index % 3) * 0.5,
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>

          {/* MIỆNG LY */}
          <path
            d="M76 116 Q150 101 224 116"
            fill="none"
            stroke="#ffffff"
            strokeOpacity=".9"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* NỀN TRẮNG CHO LOGO */}
          <circle cx="150" cy="220" r="47" fill="#ffffff" />

          {/* LOGO STARBUCKS */}
          <image
            href={starbucksLogo}
            x="103"
            y="173"
            width="94"
            height="94"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#logoClip)"
          />

          {/* VIỀN LOGO */}
          <circle
            cx="150"
            cy="220"
            r="44"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />

          {/* ÁNH SÁNG LY */}
          <path
            d="M91 145 C83 196 86 260 96 318"
            fill="none"
            stroke="#ffffff"
            strokeOpacity=".28"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </motion.svg>

      <motion.div
        className="float-chip chip-one"
        animate={
          reduce
            ? {}
            : {
                y: [0, -12, 0],
                rotate: [-6, 4, -6],
              }
        }
        transition={{
          duration: 4.2,
          repeat: Infinity,
        }}
      >
        Oolong
      </motion.div>

      <motion.div
        className="float-chip chip-two"
        animate={
          reduce
            ? {}
            : {
                y: [0, 10, 0],
                rotate: [5, -3, 5],
              }
        }
        transition={{
          duration: 5.1,
          repeat: Infinity,
        }}
      >
        Hojicha
      </motion.div>
    </div>
  );
}
