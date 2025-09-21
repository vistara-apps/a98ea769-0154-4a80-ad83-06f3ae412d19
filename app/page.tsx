'use client';

import { useState, useEffect } from 'react';
import { FrameContainer } from '@/components/FrameContainer';
import { DailyTipCard } from '@/components/DailyTipCard';
import { LogButton } from '@/components/LogButton';
import { ActionCard } from '@/components/ActionCard';
import { ProgressSummary } from '@/components/ProgressSummary';
import { getRandomTip, calculateProgress, formatDate } from '@/lib/utils';
import { HEALTH_PLANS } from '@/lib/constants';
import { Heart, Calendar, Settings } from 'lucide-react';

export default function HomePage() {
  const [dailyTip, setDailyTip] = useState(getRandomTip());
  const [healthData, setHealthData] = useState({
    water: 0,
    steps: 0,
    mood: 0,
  });
  const [goals] = useState({
    water: 8,
    steps: 10000,
    mood: 4,
  });
  const [streak, setStreak] = useState(3);
  const [showPlans, setShowPlans] = useState(false);

  // Simulate loading daily tip
  useEffect(() => {
    const timer = setTimeout(() => {
      setDailyTip(getRandomTip());
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleIncrement = (metric: 'water' | 'steps' | 'mood') => {
    setHealthData(prev => ({
      ...prev,
      [metric]: metric === 'steps' 
        ? prev[metric] + 1000 
        : metric === 'mood' 
          ? Math.min(prev[metric] + 1, 5)
          : prev[metric] + 1
    }));
  };

  const handleDecrement = (metric: 'water' | 'steps' | 'mood') => {
    setHealthData(prev => ({
      ...prev,
      [metric]: metric === 'steps' 
        ? Math.max(prev[metric] - 1000, 0)
        : Math.max(prev[metric] - 1, 0)
    }));
  };

  const waterProgress = calculateProgress(healthData.water, goals.water);
  const stepsProgress = calculateProgress(healthData.steps, goals.steps);
  const moodProgress = calculateProgress(healthData.mood, goals.mood);

  if (showPlans) {
    return (
      <FrameContainer>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setShowPlans(false)}
            className="text-primary hover:text-primary/80 transition-colors duration-200"
          >
            ← Back
          </button>
          <h1 className="text-xl font-bold text-text">Health Plans</h1>
          <div className="w-12" />
        </div>

        <div className="space-y-4">
          {HEALTH_PLANS.map((plan) => (
            <ActionCard
              key={plan.id}
              title={plan.name}
              description={`${plan.description} • ${plan.duration} days`}
              icon={plan.icon}
              onClick={() => {
                // Handle plan selection
                setShowPlans(false);
              }}
            />
          ))}
        </div>
      </FrameContainer>
    );
  }

  return (
    <FrameContainer>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-text">HealthWise</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <Settings className="w-5 h-5 text-muted" />
        </button>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-4 h-4 text-muted" />
        <span className="text-sm text-muted">
          {formatDate(new Date())}
        </span>
      </div>

      {/* Daily Tip */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text mb-3">Today's Tip</h2>
        <DailyTipCard
          title={dailyTip.title}
          description={dailyTip.description}
          category={dailyTip.category}
          estimatedTime="2 min"
        />
      </div>

      {/* Health Metrics */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text mb-3">Track Your Health</h2>
        <div className="grid grid-cols-1 gap-4">
          <LogButton
            variant="water"
            label="Water"
            icon="💧"
            value={healthData.water}
            goal={goals.water}
            onIncrement={() => handleIncrement('water')}
            onDecrement={() => handleDecrement('water')}
          />
          <LogButton
            variant="steps"
            label="Steps"
            icon="👟"
            value={healthData.steps}
            goal={goals.steps}
            onIncrement={() => handleIncrement('steps')}
            onDecrement={() => handleDecrement('steps')}
          />
          <LogButton
            variant="mood"
            label="Mood"
            icon="😊"
            value={healthData.mood}
            goal={goals.mood}
            onIncrement={() => handleIncrement('mood')}
            onDecrement={() => handleDecrement('mood')}
          />
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mb-6">
        <ProgressSummary
          waterProgress={waterProgress}
          stepsProgress={stepsProgress}
          moodProgress={moodProgress}
          streak={streak}
        />
      </div>

      {/* Health Plans */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text mb-3">Quick Challenges</h2>
        <ActionCard
          title="Start a Health Plan"
          description="Join a 3-7 day focused challenge"
          icon="🎯"
          onClick={() => setShowPlans(true)}
        />
      </div>
    </FrameContainer>
  );
}
