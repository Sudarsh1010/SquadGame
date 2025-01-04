'use client'

import { useState, useCallback } from 'react'
import { motion } from "framer-motion"
import { useWallet } from '@solana/wallet-adapter-react'
import { PageWrapper } from '@/components/page-wrapper'
import { LandingPage } from '@/components/landing-page'
import { AuthGuard } from '@/auth/auth-gaurd'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function SquadGame() {
  const { connected, connect } = useWallet()
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleInteraction = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }, [hasInteracted, connected, connect])

  return (
    <div 
      className="cursor-pointer"
      onClick={handleInteraction}
      onKeyDown={(e) => e.key === 'Enter' && handleInteraction()}
      tabIndex={0}
    >
      <AuthGuard>
        <PageWrapper isLanding={true}>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
          {!connected ? (
            <WalletMultiButton style={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: 'transparent' }}>
              <LandingPage 
                isConnected={connected}
                hasInteracted={hasInteracted}
              />
            </WalletMultiButton>
         ) : (
            <LandingPage 
              isConnected={connected}
              hasInteracted={hasInteracted}
            />
          )}
          </motion.div>
        </PageWrapper>
      </AuthGuard>
    </div>
  )
}






// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from "framer-motion"
// import { PageWrapper } from '@/components/page-wrapper'
// import { LandingPage } from '@/components/landing-page'
// import { RulesPage } from '@/components/rules-page'

// export default function SquadGame() {
//   const [showLanding, setShowLanding] = useState(true)

//   const handleInteraction = () => {
//     if (showLanding) {
//       setShowLanding(false)
//     }
//   }

//   return (
//     <div 
//       className="cursor-pointer"
//       onClick={handleInteraction}
//       onKeyDown={handleInteraction}
//       tabIndex={0}
//     >
//       <AnimatePresence mode="wait">
//         {showLanding ? (
//           <PageWrapper key="landing" isLanding={true}>
//             <motion.div
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <LandingPage />
//             </motion.div>
//           </PageWrapper>
//         ) : (
//           <PageWrapper key="rules" isLanding={false}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay: 0.3 }}
//             >
//               <RulesPage />
//             </motion.div>
//           </PageWrapper>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }