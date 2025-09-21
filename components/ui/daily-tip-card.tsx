import { cn } from '@/lib/utils'

interface DailyTipCardProps {
  tip: string
  category?: string
  className?: string
}

export function DailyTipCard({ tip, category, className }: DailyTipCardProps) {
  return (
    <div className={cn(
      'p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20',
      className
    )}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          💡
        </div>
        <div className="flex-1">
          <div className="text-sm text-muted mb-2">
            Daily Health Tip {category && `• ${category}`}
          </div>
          <div className="text-body leading-relaxed">
            {tip}
          </div>
        </div>
      </div>
    </div>
  )
}

