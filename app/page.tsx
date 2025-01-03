'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { PageWrapper } from '@/components/page-wrapper'
import { LandingPage } from '@/components/landing-page'
import { RulesPage } from '@/components/rules-page'

export default function SquadGame() {
  const [showLanding, setShowLanding] = useState(true)

  const handleInteraction = () => {
    if (showLanding) {
      setShowLanding(false)
    }
  }

  return (
    <div 
      className="cursor-pointer"
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
      tabIndex={0}
    >
      <AnimatePresence mode="wait">
        {showLanding ? (
          <PageWrapper key="landing" isLanding={true}>
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage />
            </motion.div>
          </PageWrapper>
        ) : (
          <PageWrapper key="rules" isLanding={false}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <RulesPage />
            </motion.div>
          </PageWrapper>
        )}
      </AnimatePresence>
    </div>
  )
}

