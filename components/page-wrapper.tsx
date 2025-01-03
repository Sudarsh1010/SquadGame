import { motion } from "framer-motion"
import { PageWrapperProps } from "@/types"
import { CornerSVG } from "./sub/corner-svg"

export function PageWrapper({ children, isLanding }: PageWrapperProps) {
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

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Corner SVGs with entry and exit animations */}
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={{ x: -1, y: -1 }}
        className="absolute top-0 left-0 h-[25%]"
      >
        <CornerSVG className="w-[120%] h-[128.8%]" variant={isLanding ? "topLeft" : "topLeftB"} />
      </motion.div>
      
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={{ x: 1, y: -1 }}
        className="absolute top-0 right-0 h-[25%]"
      >
        <CornerSVG className="w-[120%] h-[116.4%]" variant={isLanding ? "topRight" : "topRightB"} />
      </motion.div>
      
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={{ x: -1, y: 1 }}
        className="absolute bottom-0 left-0 h-[30%]"
      >
        <CornerSVG className="w-[136.8%] h-[136.8%]" variant={isLanding ? "bottomLeft" : "bottomLeftB"} />
      </motion.div>
      
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={{ x: 1, y: 1 }}
        className="absolute bottom-0 right-0 h-[30%]"
      >
        <CornerSVG className="w-[116.4%] h-[120%]" variant={isLanding ? "bottomRight" : "bottomRightB"} />
      </motion.div>

      {children}
    </div>
  )
}

