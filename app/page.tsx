'use client'

import { useState, useEffect } from 'react'
import { FrameContainer } from '@/components/ui/frame-container'
import { ActionCard } from '@/components/ui/action-card'
import { LogButton } from '@/components/ui/log-button'
import { DailyTipCard } from '@/components/ui/daily-tip-card'
import { dailyTips, healthPlans, planDetails } from '@/lib/data'
import { getRandomTip, getCurrentDate, calculateProgress, getMoodEmoji, getMoodLabel } from '@/lib/utils'
import { DailyTip, HealthMetrics } from '@/types'
import { Target, TrendingUp, Calendar } from 'lucide-react'

export default function Home() {
  const [currentTip, setCurrentTip] = useState<DailyTip | null>(null)
  const [metrics, setMetrics] = useState<HealthMetrics>({
    water: 0,
    steps: 0,
    mood: 3,
  })
  const [activePlan, setActivePlan] = useState(healthPlans[0])
  const [tipCompleted, setTipCompleted] = useState(false)

  useEffect(() => {
    // Initialize with a random tip
    setCurrentTip(getRandomTip(dailyTips))
  }, [])

  const handleLogMetric = (type: keyof HealthMetrics, value: number | string) => {
    setMetrics(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const handleTipAction = () => {
    setTipCompleted(true)
    // In a real app, this would save to backend
  }

  const handleStartPlan = (planId: string) => {
    const plan = healthPlans.find(p => p.planId === planId)
    if (plan) {
      setActivePlan(plan)
    }
  }

  const planDetail = planDetails[activePlan.planType as keyof typeof planDetails]

  return (
    <div className="min-h-screen bg-bg p-4">
      <FrameContainer>
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-text mb-2">HealthWise Companion</h1>
          <p className="text-muted">{getCurrentDate()}</p>
        </div>

        {/* Daily Tip */}
        {currentTip && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-text mb-3">Today's Health Tip</h2>
            <DailyTipCard
              tip={currentTip}
              onAction={handleTipAction}
              completed={tipCompleted}
            />
          </div>
        )}

        {/* Quick Log Buttons */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text mb-3">Quick Log</h2>
          <div className="grid grid-cols-1 gap-3">
            <LogButton
              variant="water"
              currentValue={`${metrics.water} glasses`}
              onClick={() => handleLogMetric('water', metrics.water + 1)}
            />
            <LogButton
              variant="steps"
              currentValue={`${metrics.steps.toLocaleString()} steps`}
              onClick={() => handleLogMetric('steps', metrics.steps + 1000)}
            />
            <LogButton
              variant="mood"
              currentValue={`${getMoodEmoji(metrics.mood)} ${getMoodLabel(metrics.mood)}`}
              onClick={() => handleLogMetric('mood', ((metrics.mood % 5) + 1))}
            />
          </div>
        </div>

        {/* Active Plan */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text mb-3">Active Challenge</h2>
          <ActionCard>
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <h3 className="font-semibold text-text">{planDetail.name}</h3>
                <p className="text-sm text-muted">{planDetail.description}</p>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{calculateProgress(activePlan.progress, 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${activePlan.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ActionCard>
        </div>

        {/* Today's Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text mb-3">Today's Summary</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-surface rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Water</span>
              </div>
              <div className="text-2xl font-bold text-primary">{metrics.water}/8</div>
              <div className="text-xs text-muted">glasses</div>
            </div>
            <div className="p-4 bg-surface rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Steps</span>
              </div>
              <div className="text-2xl font-bold text-primary">{(metrics.steps / 1000).toFixed(1)}k</div>
              <div className="text-xs text-muted">of 10k goal</div>
            </div>
          </div>
        </div>

        {/* Available Plans */}
        <div>
          <h2 className="text-lg font-semibold text-text mb-3">Start a New Challenge</h2>
          <div className="space-y-3">
            {Object.entries(planDetails).map(([planId, plan]) => (
              <ActionCard
                key={planId}
                onClick={() => handleStartPlan(planId)}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-text">{plan.name}</h3>
                    <p className="text-sm text-muted">{plan.duration} days • {plan.target} {plan.unit}</p>
                  </div>
                </div>
              </ActionCard>
            ))}
          </div>
        </div>
      </FrameContainer>
    </div>
  )
}

