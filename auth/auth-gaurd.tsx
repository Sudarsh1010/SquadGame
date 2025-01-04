'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useWallet } from '@solana/wallet-adapter-react'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { connected, publicKey } = useWallet()
  const [hasNFT, setHasNFT] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      if (!connected) {
        if (pathname !== '/') {
          router.replace('/')
        }
        setIsLoading(false)
        return
      }

      if (connected && publicKey) {
        try {
          // Implement your NFT ownership check here
          // This is a placeholder and should be replaced with actual logic
          const ownsNFT = await new Promise<boolean>((resolve) => {
            setTimeout(() => resolve(Math.random() > 0.5), 1000) // Simulating an API call
          })
          setHasNFT(ownsNFT)

          if (ownsNFT) {
            if (pathname !== '/game') {
              router.replace('/game')
            }
          } else {
            if (pathname !== '/') {
              router.replace('/')
            }
          }
        } catch (error) {
          console.error('Failed to check NFT ownership:', error)
          setHasNFT(false)
          if (pathname !== '/') {
            router.replace('/')
          }
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [connected, publicKey, router, pathname])

  return <>{children}</>
}
