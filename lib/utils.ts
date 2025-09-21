import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getCurrentDate(): string {
  return formatDate(new Date())
}

export function getRandomTip(tips: any[]): any {
  return tips[Math.floor(Math.random() * tips.length)]
}

export function calculateProgress(current: number, target: number): number {
  return Math.min(Math.round((current / target) * 100), 100)
}

export function getMoodEmoji(mood: number): string {
  switch (mood) {
    case 1: return '😢'
    case 2: return '😕'
    case 3: return '😐'
    case 4: return '🙂'
    case 5: return '😊'
    default: return '😐'
  }
}

export function getMoodLabel(mood: number): string {
  switch (mood) {
    case 1: return 'Very Low'
    case 2: return 'Low'
    case 3: return 'Neutral'
    case 4: return 'Good'
    case 5: return 'Excellent'
    default: return 'Neutral'
  }
}

