export interface User {
  userId: string
  farcasterId: string
  createdAt: Date
  preferences: UserPreferences
}

export interface UserPreferences {
  primaryFocus?: 'hydration' | 'sleep' | 'exercise' | 'mindfulness'
  notificationsEnabled: boolean
}

export interface HealthLog {
  logId: string
  userId: string
  timestamp: Date
  metricType: 'water' | 'steps' | 'mood' | 'sleep' | 'exercise'
  value: number | string
  notes?: string
}

export interface ActivePlan {
  planId: string
  userId: string
  planType: 'hydration-boost' | 'mindful-morning' | 'step-challenge'
  startDate: Date
  endDate: Date
  progress: number // 0-100
}

export interface DailyTip {
  id: string
  title: string
  description: string
  category: 'hydration' | 'exercise' | 'mindfulness' | 'nutrition' | 'sleep'
  actionable: boolean
}

export interface HealthMetrics {
  water: number // glasses
  steps: number // count
  mood: 1 | 2 | 3 | 4 | 5 // 1-5 scale
  sleep?: number // hours
  exercise?: number // minutes
}

