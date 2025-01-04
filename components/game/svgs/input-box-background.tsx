export function InputBoxBackground({ className = "" }) {
    return (
      <svg className={className} viewBox="0 0 500 60" fill="none" preserveAspectRatio="none">
        <path 
          d="M20 0H440L460 15L480 30L460 45L440 60H20L0 30L20 0Z" 
          fill="currentColor"
          className="opacity-20"
        />
        <path 
          d="M22 2H438L458 17L478 30L458 43L438 58H22L2 30L22 2Z" 
          fill="currentColor"
          className="opacity-10"
        />
      </svg>
    )
  }
  
  