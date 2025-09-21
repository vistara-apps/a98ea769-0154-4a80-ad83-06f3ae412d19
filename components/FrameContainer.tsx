'use client';

import { cn } from '@/lib/utils';

interface FrameContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function FrameContainer({ children, className }: FrameContainerProps) {
  return (
    <div className={cn(
      'min-h-screen bg-bg',
      'max-w-full px-4 py-6',
      'flex flex-col',
      className
    )}>
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
