'use client'

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ButtonBackground } from './svgs/button-background'
import { UserIcon } from './svgs/user-icon'

export function GameHeader() {
  return (
    <div className="px-2 ml-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-3xl ml-12 text-[#45F0FF]">2048</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
          <div className=" flex items-center px-3">
            <UserIcon />
            <span className="text-[#45F0FF] text-2xl">456</span>
          </div>
        </div>

        <div className="relative">
          <ButtonBackground className="text-[#FF1493] w-[260px] py-2 px-4" />
          <WalletMultiButton />
          {/* <button className="absolute inset-0 text-[#00CCCC] hover:text-[#45F0FF] transition-colors">
            Connect Wallet
          </button> */}
        </div>
      </div>
    </div>
  )
}

