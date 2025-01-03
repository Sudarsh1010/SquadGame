'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function GlitchText({ text }: { text: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const glitchVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="relative font-bold text-2xl tracking-wider"
      style={{ fontFamily: 'var(--font-geist-mono)' }}
      variants={glitchVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{
            textShadow: isGlitching 
              ? `2px 2px #ff00ff, -2px -2px #00ffff, 0 0 8px #ff00ff`
              : 'none',
            color: isGlitching ? '#ff0080' : 'white',
            transform: isGlitching ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` : 'none',
            transition: 'all 0.1s ease'
          }}
        >
          {char}
        </motion.span>
      ))}
      {isGlitching && (
        <>
          <motion.div
            className="absolute inset-0 text-2xl tracking-wider text-[#ff0080]"
            style={{ 
              fontFamily: 'var(--font-geist-mono)',
              clipPath: 'inset(10% 0 40% 0)',
              transform: 'translate(-2px, 2px)',
            }}
            animate={{
              clipPath: ['inset(10% 0 40% 0)', 'inset(40% 0 10% 0)'],
              transform: ['translate(-2px, 2px)', 'translate(2px, -2px)'],
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
          >
            {text}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-2xl tracking-wider text-[#00ffff]"
            style={{ 
              fontFamily: 'var(--font-geist-mono)',
              clipPath: 'inset(40% 0 10% 0)',
              transform: 'translate(2px, -2px)',
            }}
            animate={{
              clipPath: ['inset(40% 0 10% 0)', 'inset(10% 0 40% 0)'],
              transform: ['translate(2px, -2px)', 'translate(-2px, 2px)'],
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
          >
            {text}
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

