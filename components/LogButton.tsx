'use client';

import { cn } from '@/lib/utils';
import { Plus, Minus } from 'lucide-react';

interface LogButtonProps {
  variant: 'water' | 'steps' | 'mood';
  label: string;
  icon: string;
  value: number;
  goal: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
}

export function LogButton({ 
  variant, 
  label, 
  icon, 
  value, 
  goal, 
  onIncrement, 
  onDecrement,
  className 
}: LogButtonProps) {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'water':
        return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
      case 'steps':
        return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 'mood':
        return 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100';
      default:
        return 'bg-gray-50 border-gray-200 hover:bg-gray-100';
    }
  };

  const progress = Math.min((value / goal) * 100, 100);

  return (
    <div className={cn(
      'bg-surface rounded-lg p-4 border',
      getVariantStyles(variant),
      'transition-colors duration-200',
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-medium text-text">{label}</span>
        </div>
        <div className="text-sm text-muted">
          {value}/{goal}
        </div>
      </div>
      
      <div className="mb-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              variant === 'water' && 'bg-blue-500',
              variant === 'steps' && 'bg-green-500',
              variant === 'mood' && 'bg-yellow-500'
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-muted mt-1">
          {progress}% of goal
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={onDecrement}
          disabled={value <= 0}
          className={cn(
            'w-8 h-8 rounded-full border border-gray-300',
            'flex items-center justify-center',
            'hover:bg-gray-100 transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="text-xl font-semibold text-text min-w-[2rem] text-center">
          {value}
        </span>
        
        <button
          onClick={onIncrement}
          className={cn(
            'w-8 h-8 rounded-full border border-gray-300',
            'flex items-center justify-center',
            'hover:bg-gray-100 transition-colors duration-200'
          )}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
