'use client'

export function GameGrid() {
  return (
    <div className="relative w-full h-full flex px-4 py-8 pl-12 bg-[url('/layer1.png')] bg-no-repeat" style={{backgroundSize: '100% 100%'}}>
      <div className="flex items-center justify-center flex-1 py-2 px-8 pl-12 bg-[url('/game-bg.png')] bg-no-repeat" style={{backgroundSize: '100% 100%'}}>
        <div className="p-4 rounded-lg border border-[#FF1493]/50">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-24 h-24 rounded-lg ${
                  i % 3 === 0 ? 'bg-[#45F0FF]' : 'bg-[#FF1493]'
                } transition-colors duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

