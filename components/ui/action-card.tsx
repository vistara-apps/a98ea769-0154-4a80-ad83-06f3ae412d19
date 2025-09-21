import { cn } from '@/lib/utils'

interface ActionCardProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'default' | 'active'
}

export function ActionCard({
  children,
  onClick,
  className,
  variant = 'default'
}: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-4 rounded-lg border-2 transition-all duration-200 text-left',
        'hover:shadow-card active:scale-95',
        variant === 'default' && 'border-primary/20 bg-surface hover:border-primary/40',
        variant === 'active' && 'border-primary bg-primary/5 shadow-card',
        className
      )}
    >
      {children}
    </button>
  )
}

