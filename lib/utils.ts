import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getRandomTip() {
  const tips = [
    {
      title: 'Hydration Check',
      description: 'Drink a glass of water right now! Your body will thank you.',
      category: 'hydration',
    },
    {
      title: 'Quick Stretch',
      description: 'Stand up and do 10 shoulder rolls to release tension.',
      category: 'exercise',
    },
    {
      title: 'Mindful Moment',
      description: 'Take 3 deep breaths and notice how you feel right now.',
      category: 'mindfulness',
    },
    {
      title: 'Posture Check',
      description: 'Sit up straight and adjust your screen to eye level.',
      category: 'exercise',
    },
    {
      title: 'Gratitude Pause',
      description: 'Think of one thing you\'re grateful for today.',
      category: 'mindfulness',
    },
  ];
  
  return tips[Math.floor(Math.random() * tips.length)];
}

export function calculateProgress(current: number, goal: number): number {
  return Math.min(Math.round((current / goal) * 100), 100);
}

export function getMoodEmoji(rating: number): string {
  const moods = ['😢', '😕', '😐', '😊', '😄'];
  return moods[Math.max(0, Math.min(4, rating - 1))] || '😐';
}

export function getStreakMessage(streak: number): string {
  if (streak === 0) return 'Start your streak today!';
  if (streak === 1) return 'Great start! Keep it up!';
  if (streak < 7) return `${streak} days strong! 💪`;
  if (streak < 30) return `Amazing ${streak}-day streak! 🔥`;
  return `Incredible ${streak}-day streak! You're a health champion! 🏆`;
}
