import { DailyTip, HealthMetric } from './types';

export const HEALTH_METRICS: HealthMetric[] = [
  {
    type: 'water',
    label: 'Water',
    icon: '💧',
    color: 'bg-blue-500',
    unit: 'glasses',
    defaultGoal: 8,
  },
  {
    type: 'steps',
    label: 'Steps',
    icon: '👟',
    color: 'bg-green-500',
    unit: 'steps',
    defaultGoal: 10000,
  },
  {
    type: 'mood',
    label: 'Mood',
    icon: '😊',
    color: 'bg-yellow-500',
    unit: 'rating',
    defaultGoal: 4,
  },
];

export const DAILY_TIPS: DailyTip[] = [
  {
    id: '1',
    title: 'Start with a glass of water',
    description: 'Drink a full glass of water as soon as you wake up to kickstart your metabolism and rehydrate your body.',
    category: 'hydration',
    actionable: true,
    estimatedTime: '1 min',
  },
  {
    id: '2',
    title: 'Take the stairs',
    description: 'Choose stairs over elevators today. It\'s a simple way to add extra steps and strengthen your legs.',
    category: 'exercise',
    actionable: true,
    estimatedTime: '2-5 min',
  },
  {
    id: '3',
    title: '3 deep breaths',
    description: 'Take three slow, deep breaths right now. Inhale for 4 counts, hold for 4, exhale for 6.',
    category: 'mindfulness',
    actionable: true,
    estimatedTime: '1 min',
  },
  {
    id: '4',
    title: 'Add color to your plate',
    description: 'Include at least one colorful vegetable or fruit in your next meal for extra vitamins and antioxidants.',
    category: 'nutrition',
    actionable: true,
    estimatedTime: '5 min',
  },
  {
    id: '5',
    title: 'Stretch your neck',
    description: 'Gently roll your shoulders and stretch your neck side to side to release tension from screen time.',
    category: 'exercise',
    actionable: true,
    estimatedTime: '2 min',
  },
];

export const HEALTH_PLANS = [
  {
    id: 'hydration_boost',
    name: '3-Day Hydration Boost',
    description: 'Increase your daily water intake with gentle reminders',
    duration: 3,
    color: 'bg-blue-500',
    icon: '💧',
  },
  {
    id: 'mindful_morning',
    name: 'Mindful Morning',
    description: 'Start each day with 5 minutes of mindfulness',
    duration: 7,
    color: 'bg-purple-500',
    icon: '🧘',
  },
  {
    id: 'step_challenge',
    name: 'Step Challenge',
    description: 'Gradually increase your daily step count',
    duration: 5,
    color: 'bg-green-500',
    icon: '👟',
  },
];
