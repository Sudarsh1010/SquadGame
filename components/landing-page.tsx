'use client'

import { motion } from "framer-motion"
import { GameLogoLanding } from "./sub/game-logo"
import { GlitchText } from "./sub/glitch-text"

export function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="relative">
        {/* Corner Icons around the content */}
        <motion.div 
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          exit={{ x: -100, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#FF1493"/>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          exit={{ x: 100, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" fill="#FF1493"/>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
          exit={{ x: -100, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <polygon points="20,0 40,40 0,40" fill="#FF1493"/>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          exit={{ x: 100, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#FF1493"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <div className="text-center space-y-4">
          <GameLogoLanding />
          <h2 
            className="text-white text-2xl tracking-wide"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            Season 2
          </h2>
        </div>
      </div>

      {/* Bottom glitch text */}
      <div className="absolute bottom-8">
        <GlitchText text="Click anywhere or press any key" />
      </div>
    </div>
  )
}

