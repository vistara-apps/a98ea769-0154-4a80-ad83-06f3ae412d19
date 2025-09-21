'use client';

import { cn } from '@/lib/utils';
import { Clock, Lightbulb } from 'lucide-react';

interface DailyTipCardProps {
  title: string;
  description: string;
  category: string;
  estimatedTime?: string;
  className?: string;
}

export function DailyTipCard({ 
  title, 
  description, 
  category, 
  estimatedTime,
  className 
}: DailyTipCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'hydration': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'exercise': return 'bg-green-50 text-green-700 border-green-200';
      case 'mindfulness': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'nutrition': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'sleep': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={cn(
      'bg-surface rounded-lg p-4 shadow-card',
      'border border-gray-100',
      'animate-fade-in',
      className
    )}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border',
              getCategoryColor(category)
            )}>
              {category}
            </span>
            {estimatedTime && (
              <span className="inline-flex items-center gap-1 text-xs text-muted">
                <Clock className="w-3 h-3" />
                {estimatedTime}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-text mb-2">
            {title}
          </h3>
          <p className="text-base leading-6 text-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
