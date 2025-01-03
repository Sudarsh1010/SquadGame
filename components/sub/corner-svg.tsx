import { CornerSVGProps } from "@/types"

export function CornerSVG({ className = "", variant = "topLeft" }: CornerSVGProps) {
  const svgContent = {
    topLeft: (
      <svg width="auto" height="auto" viewBox="0 0 405 436" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M230.699 169.32C230.699 262.866 154.866 338.699 61.3197 338.699C-32.2262 338.699 -108.06 262.866 -108.06 169.32C-108.06 75.7738 -32.2262 -0.0601044 61.3197 -0.0601044C154.866 -0.0601044 230.699 75.7738 230.699 169.32ZM61.3197 432.139C206.471 432.139 324.139 314.471 324.139 169.32C324.139 24.1684 206.471 -93.5 61.3197 -93.5C-83.8316 -93.5 -201.5 24.1684 -201.5 169.32C-201.5 314.471 -83.8316 432.139 61.3197 432.139Z" stroke="#FF41A3" stroke-width="7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.32 296.199C240.799 296.199 318.199 218.799 318.199 123.32C318.199 27.8408 240.799 -49.5601 145.32 -49.5601C49.8408 -49.5601 -27.5601 27.8408 -27.5601 123.32C-27.5601 218.799 49.8408 296.199 145.32 296.199ZM145.32 382.639C288.538 382.639 404.639 266.538 404.639 123.32C404.639 -19.8986 288.538 -136 145.32 -136C2.10138 -136 -114 -19.8986 -114 123.32C-114 266.538 2.10138 382.639 145.32 382.639Z" fill="white"/>
      </svg>
    ),
    topRight: (
      <svg width="auto" height="auto" viewBox="0 0 353 410" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M347.695 -78.75L344.664 -84L341.633 -78.75L78.9689 376.197L75.9378 381.447H82H607.327H613.39L610.358 376.197L347.695 -78.75ZM451.547 288.007H237.78L344.664 102.88L451.547 288.007Z" stroke="#FF41A3" stroke-width="7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M262.664 -155L0 299.947H525.327L262.664 -155ZM262.664 17.8798L149.718 213.507H375.609L262.664 17.8798Z" fill="white"/>
      </svg>
    ),
    bottomLeft: (
      <svg width="auto" height="auto" viewBox="0 0 555 557" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M316.339 526.746L322.401 526.71L319.339 521.478L53.9899 68.0922L50.9278 62.8602L47.9278 68.1281L-212.041 524.62L-215.041 529.888L-208.979 529.852L316.339 526.746ZM-53.754 435.493L52.0327 249.737L160.009 434.229L-53.754 435.493Z" stroke="#FF41A3" stroke-width="7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M424.677 453.386L159.328 -0.000234091L-100.641 456.492L424.677 453.386ZM274.45 367.832L160.35 172.877L48.5635 369.168L274.45 367.832Z" fill="white"/>
      </svg>
    ),
    bottomRight: (
      <svg width="auto" height="auto" viewBox="0 0 353 410" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65 3.5H61.5V7V461.947V465.447H65H519.947H523.447V461.947V7V3.5H519.947H65ZM154.94 372.007V96.9399H430.007V372.007H154.94Z" stroke="#FF41A3" stroke-opacity="0.4" strokeWidth="7"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M368.507 163.44H86.4399V445.507H368.507V163.44ZM0 77V531.947H454.947V77H0Z" fill="white"/>
      </svg>
    ),
    topLeftB: (
      <svg width="auto" height="auto" viewBox="0 0 405 436" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M230.699 169.32C230.699 262.866 154.866 338.699 61.3197 338.699C-32.2262 338.699 -108.06 262.866 -108.06 169.32C-108.06 75.7738 -32.2262 -0.0601044 61.3197 -0.0601044C154.866 -0.0601044 230.699 75.7738 230.699 169.32ZM61.3197 432.139C206.471 432.139 324.139 314.471 324.139 169.32C324.139 24.1684 206.471 -93.5 61.3197 -93.5C-83.8316 -93.5 -201.5 24.1684 -201.5 169.32C-201.5 314.471 -83.8316 432.139 61.3197 432.139Z" stroke="#215FFF" stroke-opacity="0.4" stroke-width="7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.32 296.199C240.799 296.199 318.199 218.799 318.199 123.32C318.199 27.8408 240.799 -49.5601 145.32 -49.5601C49.8408 -49.5601 -27.5601 27.8408 -27.5601 123.32C-27.5601 218.799 49.8408 296.199 145.32 296.199ZM145.32 382.639C288.538 382.639 404.639 266.538 404.639 123.32C404.639 -19.8986 288.538 -136 145.32 -136C2.10138 -136 -114 -19.8986 -114 123.32C-114 266.538 2.10138 382.639 145.32 382.639Z" fill="#215FFF"/>
      </svg>
    ),
    topRightB: (
      <svg width="auto" height="auto" viewBox="0 0 353 410" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M347.695 -78.75L344.664 -84L341.633 -78.75L78.9689 376.197L75.9378 381.447H82H607.327H613.39L610.358 376.197L347.695 -78.75ZM451.547 288.007H237.78L344.664 102.88L451.547 288.007Z" stroke="#215FFF" stroke-opacity="0.4" stroke-width="7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M262.664 -155L0 299.947H525.327L262.664 -155ZM262.664 17.8798L149.718 213.507H375.609L262.664 17.8798Z" fill="#215FFF"/>
      </svg>
    ),
    bottomLeftB: (
      <svg width="auto" height="auto" viewBox="0 0 555 557" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M316.339 526.746L322.401 526.71L319.339 521.478L53.9899 68.0922L50.9278 62.8602L47.9278 68.1281L-212.041 524.62L-215.041 529.888L-208.979 529.852L316.339 526.746ZM-53.754 435.493L52.0327 249.737L160.009 434.229L-53.754 435.493Z" stroke="#215FFF" stroke-opacity="0.4" stroke-width="7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M424.677 453.386L159.328 -0.000234091L-100.641 456.492L424.677 453.386ZM274.45 367.832L160.35 172.877L48.5635 369.168L274.45 367.832Z" fill="#215FFF"/>
      </svg>
    ),
    bottomRightB: (
      <svg width="auto" height="auto" viewBox="0 0 353 410" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65 3.5H61.5V7V461.947V465.447H65H519.947H523.447V461.947V7V3.5H519.947H65ZM154.94 372.007V96.9399H430.007V372.007H154.94Z" stroke="#215FFF" stroke-opacity="0.4" strokeWidth="7"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M368.507 163.44H86.4399V445.507H368.507V163.44ZM0 77V531.947H454.947V77H0Z" fill="#215FFF"/>
      </svg>
    )
  }

  return (
    <div className={className}>
      {svgContent[variant] || svgContent.topLeft}
    </div>
  )
}
