'use client';

import { cn } from '@/lib/utils';
import { TrendingUp, Award, Target } from 'lucide-react';

interface ProgressSummaryProps {
  waterProgress: number;
  stepsProgress: number;
  moodProgress: number;
  streak: number;
  className?: string;
}

export function ProgressSummary({ 
  waterProgress, 
  stepsProgress, 
  moodProgress, 
  streak,
  className 
}: ProgressSummaryProps) {
  const overallProgress = Math.round((waterProgress + stepsProgress + moodProgress) / 3);
  
  return (
    <div className={cn(
      'bg-surface rounded-lg p-4 border border-gray-200 shadow-card',
      className
    )}>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-text">Today's Progress</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-text mb-1">
            {overallProgress}%
          </div>
          <div className="text-sm text-muted">Overall</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-text mb-1">
            {streak}
          </div>
          <div className="text-sm text-muted">Day Streak</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text">💧 Water</span>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${waterProgress}%` }}
              />
            </div>
            <span className="text-sm text-muted w-8">{waterProgress}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text">👟 Steps</span>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-green-500 rounded-full transition-all duration-300"
                style={{ width: `${stepsProgress}%` }}
              />
            </div>
            <span className="text-sm text-muted w-8">{stepsProgress}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text">😊 Mood</span>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-yellow-500 rounded-full transition-all duration-300"
                style={{ width: `${moodProgress}%` }}
              />
            </div>
            <span className="text-sm text-muted w-8">{moodProgress}%</span>
          </div>
        </div>
      </div>

      {overallProgress >= 100 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              All goals completed! Great job! 🎉
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
