'use client'

import { motion } from "framer-motion"
import { gameRules } from "@/constants/rules"
import { GameLogoRules } from "./sub/game-logo"
import { GlitchText } from "./sub/glitch-text"

export function RulesPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-between px-4 py-8 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <GameLogoRules />
      </motion.div>

      <motion.div 
        className="flex-grow w-full max-w-4xl overflow-y-auto my-8 pr-4 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {gameRules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex gap-4"
          >
            <span className="text-white font-bold text-xl md:text-md" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              {index + 1}.
            </span>
            <p className="text-white text-xl md:text-md" style={{ fontFamily: 'var(--font-geist-mono)' }}>
              {rule}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute bottom-8 flex flex-col justify-center items-center">
        <motion.svg
          className="transition duration-300 ease-in-out group-hover:scale-105"
          width="100"
          height="100"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => window.location.href = '/game'}
        >
          {/* Rectangle with hover color change */}
          <motion.rect x="16" y="20" width="31" height="25" fill="url(#pattern0_1162_1011)" fillOpacity="0.8"/>
          {/* Path with a glitch-like effect */}
            <motion.path
              d="M60.9128 45.7C59.403 48.8814 57.4618 51.6854 55.0892 54.1119C52.7166 56.6463 49.9665 58.6953 46.893 60.313C43.9272 61.8768 40.6379 63.0091 37.2408 63.5484C33.9515 64.1415 30.5004 64.1415 27.0494 63.6023C22.7356 62.9552 18.7992 61.4454 15.2942 59.2885C11.6814 57.0777 8.60784 54.2197 6.12739 50.8226C3.70087 47.4794 1.8675 43.597 0.896887 39.4989C-0.0737207 35.5086 -0.289425 31.3026 0.41157 27.0427L0.573364 25.9103L1.70573 26.0721L2.08319 26.126L3.1077 26.2878C3.8087 22.7828 5.10284 19.6014 6.88229 16.7435C8.87743 13.4003 11.5736 10.5424 14.6472 8.27763C17.7747 6.0668 21.2797 4.3952 25.1082 3.47851C28.7749 2.61575 32.6573 2.40007 36.5398 3.04714C38.1934 3.29878 39.7751 3.65826 41.285 4.12559C42.8308 4.66482 44.3046 5.29392 45.7066 6.01288C47.1086 6.7678 48.4567 7.63056 49.7508 8.60117C51.045 9.57177 52.2493 10.6322 53.3637 11.7826L54.1725 12.6993L53.3097 13.5081L52.9862 13.7777L52.1234 14.6405L51.2607 13.7777C50.2541 12.6993 49.1757 11.7287 48.0253 10.8659C46.9109 10.0032 45.6886 9.23026 44.3585 8.54724C43.1004 7.86422 41.7703 7.28905 40.3683 6.82172C39.0022 6.39034 37.5823 6.04882 36.1084 5.79718C32.5495 5.25795 29.0445 5.41973 25.7552 6.22857C22.3581 7.03741 19.1227 8.54725 16.3188 10.5963C13.5148 12.5915 11.1422 15.1797 9.2549 18.1994C7.52938 21.0573 6.28917 24.3466 5.69602 27.9055C5.31856 30.2242 5.26461 32.4889 5.53422 34.7537C5.74991 37.0184 6.28915 39.2292 7.09799 41.3861C7.90683 43.5431 8.98529 45.5382 10.3334 47.4255C11.6275 49.2589 13.2452 50.9844 14.9707 52.4403L15.9413 53.1952L15.1325 54.1658L14.9168 54.4354L14.2158 55.2982C15.0067 55.9093 15.8515 56.4845 16.7502 57.0237C19.8777 58.911 23.4366 60.2591 27.2651 60.9062C27.4269 60.2591 27.8582 58.21 27.8582 58.21C31.4171 58.8032 34.9221 58.5875 38.2114 57.8326C41.6624 56.9698 44.8438 55.5139 47.6478 53.4648C50.4518 51.4158 52.8784 48.8275 54.7117 45.8617C56.4912 42.9499 57.7314 39.7146 58.2706 36.1557C58.4863 34.7896 58.5941 33.4236 58.5941 32.0575C58.5941 30.6915 58.5043 29.3614 58.3245 28.0673C58.1088 26.7012 57.8033 25.3711 57.4079 24.077C56.9765 22.7828 56.4732 21.5246 55.898 20.3024L55.3588 19.2239L56.4372 18.6847L56.8147 18.5229L57.8931 17.9837L58.4324 19.0622C59.0794 20.4282 59.6367 21.8302 60.104 23.2681C60.5354 24.6701 60.8768 26.126 61.1285 27.6359C61.3442 29.1098 61.4521 30.5836 61.4521 32.0575C61.4521 33.4595 61.3442 34.8615 61.1285 36.2635L61.0746 36.5331V36.587C60.6971 39.0136 59.9961 41.3861 59.0795 43.5431L59.9961 44.0284L60.3736 44.1901L61.3981 44.6754L60.9128 45.7Z"
              fill="#EAEBE4"
              fillOpacity="0.4"
              animate={{
                x: [0, -2, 2, -1, 1, 0], // Glitch movement
                y: [0, 1, -1, 2, -2, 0],
                fill: ["#EAEBE4", "#FFFFFF", "#EAEBE4"],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity, 
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            />
            <motion.defs>
            <motion.pattern id="pattern0_1162_1011" patternContentUnits="objectBoundingBox" width="1" height="1">
            <motion.use xlinkHref="#image0_1162_1011" transform="matrix(0.00187984 0 0 0.002331 -0.00285736 0)"/>
            </motion.pattern>
            <motion.image id="image0_1162_1011" width="535" height="429" xlinkHref="data:image/png;base64,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"/>
            </motion.defs>
          </motion.svg>
          <GlitchText text="Click the shaking icon" />
        </div>
      </div>
  )
}

