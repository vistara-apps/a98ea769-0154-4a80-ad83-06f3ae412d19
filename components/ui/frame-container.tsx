import { cn } from '@/lib/utils'

interface FrameContainerProps {
  children: React.ReactNode
  className?: string
}

export function FrameContainer({ children, className }: FrameContainerProps) {
  return (
    <div className={cn(
      'max-w-full px-4 py-6 bg-surface rounded-lg shadow-card',
      className
    )}>
      {children}
    </div>
  )
}

