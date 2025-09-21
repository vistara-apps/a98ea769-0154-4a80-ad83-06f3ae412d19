import { DailyTip, ActivePlan } from '@/types'

export const dailyTips: DailyTip[] = [
  {
    id: '1',
    title: 'Stay Hydrated',
    description: 'Drink a glass of water first thing in the morning to kickstart your day and boost your energy levels.',
    category: 'hydration',
    actionable: true,
  },
  {
    id: '2',
    title: 'Mindful Breathing',
    description: 'Take 5 deep breaths, inhaling for 4 counts and exhaling for 4 counts, to center yourself and reduce stress.',
    category: 'mindfulness',
    actionable: true,
  },
  {
    id: '3',
    title: 'Quick Stretch',
    description: 'Stand up and reach for the sky with both arms, then gently bend side to side to release tension in your back.',
    category: 'exercise',
    actionable: true,
  },
  {
    id: '4',
    title: 'Healthy Snack',
    description: 'Choose a piece of fruit or a handful of nuts instead of processed snacks to maintain steady energy levels.',
    category: 'nutrition',
    actionable: true,
  },
  {
    id: '5',
    title: 'Sleep Quality',
    description: 'Avoid screens for at least 30 minutes before bed to improve the quality of your sleep tonight.',
    category: 'sleep',
    actionable: true,
  },
  {
    id: '6',
    title: 'Step Goal',
    description: 'Aim for 8,000 steps today. Every step counts toward better cardiovascular health and mood improvement.',
    category: 'exercise',
    actionable: true,
  },
  {
    id: '7',
    title: 'Water Reminder',
    description: 'Set a reminder to drink water every hour. Your body will thank you for staying properly hydrated.',
    category: 'hydration',
    actionable: true,
  },
  {
    id: '8',
    title: 'Gratitude Practice',
    description: 'Take a moment to think of three things you\'re grateful for today. This simple practice can boost your mood significantly.',
    category: 'mindfulness',
    actionable: true,
  },
]

export const healthPlans: ActivePlan[] = [
  {
    planId: 'hydration-boost',
    userId: 'user1',
    planType: 'hydration-boost',
    startDate: new Date(),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    progress: 0,
  },
  {
    planId: 'mindful-morning',
    userId: 'user1',
    planType: 'mindful-morning',
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    progress: 0,
  },
  {
    planId: 'step-challenge',
    userId: 'user1',
    planType: 'step-challenge',
    startDate: new Date(),
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
    progress: 0,
  },
]

export const planDetails = {
  'hydration-boost': {
    name: 'Hydration Boost',
    description: 'Drink 8 glasses of water daily for 3 days',
    duration: 3,
    target: 8,
    unit: 'glasses',
  },
  'mindful-morning': {
    name: 'Mindful Morning',
    description: 'Start your day with 10 minutes of mindfulness practice',
    duration: 7,
    target: 10,
    unit: 'minutes',
  },
  'step-challenge': {
    name: 'Step Challenge',
    description: 'Walk 10,000 steps daily for 2 weeks',
    duration: 14,
    target: 10000,
    unit: 'steps',
  },
}

