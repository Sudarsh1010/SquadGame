export interface CornerSVGProps {
    className?: string
    variant?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |'topLeftB' | 'topRightB' | 'bottomLeftB' | 'bottomRightB'
  }
  
  export interface GlitchTextProps {
    text: string
  }
  
  export interface PageWrapperProps {
    children: React.ReactNode
    isLanding: boolean
  }
  
  