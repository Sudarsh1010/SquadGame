'use client'

import { motion } from "framer-motion"
import { gameRules } from "@/constants/rules"
import { GameLogoRules } from "./sub/game-logo"

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
    </div>
  )
}

