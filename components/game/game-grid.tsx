'use client'

import { motion } from "framer-motion";
import { WaitPage } from "./wait-page";
import { CornerSVG } from "../sub/corner-svg";

const cornerVariants = {
  hidden: (custom: { x: number; y: number }) => ({
    x: custom.x * 100,
    y: custom.y * 100,
  }),
  visible: {
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (custom: { x: number; y: number }) => ({
    x: custom.x * 100,
    y: custom.y * 100,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

export function GameGrid() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-[url('/layer1.png')] bg-no-repeat"
      style={{ backgroundSize: "100% 100%" }}
    >
      {/* Main Container */}
      <div
        className="relative flex flex-col items-center justify-center w-[90%] max-w-4xl h-[90%] bg-[url('/game-bg.png')] bg-no-repeat rounded-lg overflow-hidden"
        style={{ backgroundSize: "100% 100%" }}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        {/* Corner SVGs */}
        <motion.div
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={{ x: -1, y: -1 }}
          className="absolute top-0 left-0 w-[20%] h-[20%]"
        >
          <CornerSVG className="w-full h-full" variant="topLeftB" />
        </motion.div>

        <motion.div
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={{ x: 1, y: -1 }}
          className="absolute top-0 right-0 w-[20%] h-[20%]"
        >
          <CornerSVG className="w-full h-full" variant="topRightB" />
        </motion.div>

        <motion.div
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={{ x: -1, y: 1 }}
          className="absolute bottom-0 left-0 w-[20%] h-[20%]"
        >
          <CornerSVG className="w-full h-full" variant="bottomLeftB" />
        </motion.div>

        <motion.div
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={{ x: 1, y: 1 }}
          className="absolute bottom-0 right-0 w-[20%] h-[20%]"
        >
          <CornerSVG className="w-full h-full" variant="bottomRightB" />
        </motion.div>

        {/* WaitPage Component */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <WaitPage />
        </div>
      </div>
    </div>
  );
}
