export interface User {
  userId: string;
  farcasterId: string;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  primaryFocus?: 'hydration' | 'sleep' | 'exercise' | 'mindfulness';
  notificationsEnabled: boolean;
  dailyGoals: {
    water: number; // glasses
    steps: number;
    mood: number; // 1-5 scale
  };
}

export interface HealthLog {
  logId: string;
  userId: string;
  timestamp: Date;
  metricType: 'water' | 'steps' | 'mood';
  value: number;
  notes?: string;
}

export interface ActivePlan {
  planId: string;
  userId: string;
  planType: 'hydration_boost' | 'mindful_morning' | 'step_challenge';
  startDate: Date;
  endDate: Date;
  progress: number; // 0-100
  completed: boolean;
}

export interface DailyTip {
  id: string;
  title: string;
  description: string;
  category: 'hydration' | 'exercise' | 'mindfulness' | 'nutrition' | 'sleep';
  actionable: boolean;
  estimatedTime?: string;
}

export interface HealthMetric {
  type: 'water' | 'steps' | 'mood';
  label: string;
  icon: string;
  color: string;
  unit: string;
  defaultGoal: number;
}
