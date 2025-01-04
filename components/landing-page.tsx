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
          <svg width="120" height="116" viewBox="0 0 372 359" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M144.126 12.3783C138.437 16.0957 135.124 25.4063 128.502 44.0268L105.605 108.398L200.12 177.898L186.214 241.742L261.756 316.497L325.018 307.25C342.511 304.693 351.258 303.414 355.907 298.975C359.964 295.1 362.222 289.709 362.139 284.099C362.045 277.672 356.824 270.542 346.384 256.286L346.377 256.275L184.919 35.7798L184.91 35.7683C173.239 19.8305 167.403 11.8608 160.887 9.9283C155.211 8.24457 149.083 9.14037 144.126 12.3783Z" stroke="#FF41A3" stroke-width="17.97" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.0546 348.069C25.7792 350.991 34.5259 349.713 52.0193 347.156L178.544 328.661L90.5847 264.878L108.661 208.437L62.7574 175.686L16.9622 304.428C11.0372 321.085 8.07471 329.413 9.82401 335.6C11.3505 340.998 15.0579 345.517 20.0546 348.069Z" stroke="#FF41A3" stroke-width="17.97" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          exit={{ x: 100, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
          <svg width="120" height="117" viewBox="0 0 334 326" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.0804 273.093C61.4632 292.167 73.1828 311.372 92.2565 315.989C111.331 320.606 130.535 308.887 135.152 289.813L151.872 220.741M216.217 181.47C233.272 174.124 252.763 172.044 272.199 176.748C291.64 181.454 308.017 192.22 319.823 206.556C327.408 175.223 325.196 143.812 315.153 115.543L251.062 134.251L216.217 181.47ZM202.031 13.5252C116.2 -7.25138 29.7766 45.4861 9 131.318C26.0539 123.971 45.5468 121.884 64.9838 126.589C84.4208 131.294 100.803 142.058 112.609 156.39C129.663 149.044 149.155 146.964 168.592 151.669L218.505 86.3189L284.624 63.4793C263.647 39.5261 235.33 21.5856 202.031 13.5252Z" stroke="#FF41A3" stroke-width="17.97" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
          exit={{ x: -100, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
          <svg width="120" height="124.5" viewBox="0 0 341 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M124.891 11.8424C122.494 14.2706 122.019 19.6412 121.072 30.3819L113.522 115.933L113.522 115.935C113.242 119.109 113.101 120.696 112.515 122.077C111.995 123.299 111.225 124.398 110.254 125.303C109.157 126.326 107.712 127 104.824 128.347L26.9904 164.653L26.9903 164.653C17.2186 169.21 12.3328 171.489 10.8687 174.571C9.59705 177.248 9.6506 180.366 11.0132 182.998C12.5813 186.027 17.5392 188.136 27.4543 192.354L27.4649 192.359L106.497 225.977L197.553 74.8L147.276 21.3685C139.921 13.4835 136.243 9.54124 132.86 9.10153C129.921 8.71917 126.973 9.73313 124.891 11.8424Z" stroke="#FF41A3" stroke-width="17.97" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M322.86 67.2564C319.809 65.7272 314.556 66.9357 304.048 69.3534L262.199 78.9815L125.812 295.27L126.091 323.328L126.091 323.329C127.407 334.031 128.064 339.381 130.542 341.725C132.696 343.763 135.678 344.675 138.602 344.192C141.968 343.636 145.508 339.571 152.588 331.438L208.982 266.663C211.075 264.258 212.122 263.058 213.408 262.285C214.547 261.602 215.816 261.166 217.134 261.003C218.623 260.822 220.187 261.124 223.316 261.732L307.625 278.111C318.21 280.167 323.502 281.194 326.498 279.562C329.1 278.143 330.889 275.591 331.334 272.659C331.846 269.287 329.074 264.664 323.528 255.419L323.526 255.416L279.348 181.767C277.708 179.033 276.889 177.666 276.552 176.204C276.254 174.911 276.231 173.569 276.485 172.265C276.77 170.794 277.542 169.401 279.082 166.621L279.088 166.611L320.718 91.489L320.723 91.4794C325.945 82.0543 328.557 77.3416 327.929 73.9894C327.384 71.076 325.509 68.5849 322.86 67.2564Z" stroke="#FF41A3" stroke-width="17.97" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          exit={{ x: 100, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
          <svg width="120" height="120" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M168.9 328.8C257.211 328.8 328.8 257.211 328.8 168.9C328.8 126.561 312.345 88.066 285.481 59.4604L214.614 188.064L122.787 229.986L97.1397 311.832C118.72 322.688 143.096 328.8 168.9 328.8Z" stroke="#FF41A3" stroke-width="17.9663" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M168.9 9C80.5897 9 9 80.5897 9 168.9C9 212.586 26.5186 252.179 54.9139 281.039L76.8727 188.064L168.9 146.143L245.556 28.5379C222.796 16.0817 196.675 9 168.9 9Z" stroke="#FF41A3" stroke-width="17.9663" stroke-linecap="round" stroke-linejoin="round"/>
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
        <></>
        <GlitchText text="Click anywhere or press any key" />
      </div>
    </div>
  )
}

