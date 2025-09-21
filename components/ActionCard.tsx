'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: string;
  variant?: 'default' | 'active';
  onClick?: () => void;
  className?: string;
}

export function ActionCard({ 
  title, 
  description, 
  icon, 
  variant = 'default',
  onClick,
  className 
}: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full bg-surface rounded-lg p-4 border text-left',
        'transition-all duration-200 hover:shadow-md',
        variant === 'default' && 'border-gray-200 hover:border-gray-300',
        variant === 'active' && 'border-primary bg-primary/5 hover:bg-primary/10',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center text-xl',
            variant === 'default' && 'bg-gray-100',
            variant === 'active' && 'bg-primary/20'
          )}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-text mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted">
              {description}
            </p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted flex-shrink-0" />
      </div>
    </button>
  );
}
