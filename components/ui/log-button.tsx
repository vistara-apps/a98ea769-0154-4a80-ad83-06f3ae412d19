import { cn } from '@/lib/utils'
import { Droplets, Footprints, Heart } from 'lucide-react'

interface LogButtonProps {
  onClick: () => void
  variant: 'water' | 'steps' | 'mood'
  currentValue?: number | string
  className?: string
}

export function LogButton({ onClick, variant, currentValue, className }: LogButtonProps) {
  const getIcon = () => {
    switch (variant) {
      case 'water':
        return <Droplets className="w-6 h-6" />
      case 'steps':
        return <Footprints className="w-6 h-6" />
      case 'mood':
        return <Heart className="w-6 h-6" />
      default:
        return null
    }
  }

  const getLabel = () => {
    switch (variant) {
      case 'water':
        return 'Log Water'
      case 'steps':
        return 'Log Steps'
      case 'mood':
        return 'Log Mood'
      default:
        return 'Log'
    }
  }

  const getColor = () => {
    switch (variant) {
      case 'water':
        return 'text-blue-500 hover:bg-blue-50'
      case 'steps':
        return 'text-green-500 hover:bg-green-50'
      case 'mood':
        return 'text-purple-500 hover:bg-purple-50'
      default:
        return 'text-primary hover:bg-primary/10'
    }
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 p-4 rounded-lg border-2 border-transparent',
        'transition-all duration-200 hover:shadow-card active:scale-95',
        getColor(),
        className
      )}
    >
      {getIcon()}
      <div className="flex-1 text-left">
        <div className="font-medium">{getLabel()}</div>
        {currentValue && (
          <div className="text-sm text-muted">
            Current: {currentValue}
          </div>
        )}
      </div>
    </button>
  )
}

