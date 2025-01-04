export function ChatBubble({ className = "", isUser = false }) {
    return (
      <svg className={className} viewBox="0 0 200 100" fill="none" preserveAspectRatio="none">
        <path 
          d={isUser 
            ? "M20 0H180L200 20V80L180 100H20L0 80V20L20 0Z" 
            : "M0 20L20 0H180L200 20V80L180 100H20L0 80V20Z"
          }
          fill="currentColor"
        />
      </svg>
    )
  }
  
  