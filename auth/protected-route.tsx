'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useWallet } from '@solana/wallet-adapter-react'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { connected } = useWallet()

  useEffect(() => {
    if (!connected) {
      router.replace('/')
    }
  }, [connected, router])

  if (!connected) {
    return null
  }

  return <>{children}</>
}

