import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type') || 'dashboard'
  const value = searchParams.get('value')

  let svgContent = ''

  switch (type) {
    case 'dashboard':
      svgContent = `
        <rect width="1200" height="630" fill="url(#gradient)"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea"/>
            <stop offset="100%" style="stop-color:#764ba2"/>
          </linearGradient>
        </defs>
        <text x="600" y="200" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">HealthWise Companion</text>
        <text x="600" y="250" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24">Your personalized daily health nudges</text>
        <text x="600" y="280" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24">and progress tracker.</text>

        <circle cx="300" cy="400" r="40" fill="rgba(255,255,255,0.2)"/>
        <text x="300" y="410" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="30">💧</text>

        <circle cx="600" cy="400" r="40" fill="rgba(255,255,255,0.2)"/>
        <text x="600" y="410" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="30">🚶</text>

        <circle cx="900" cy="400" r="40" fill="rgba(255,255,255,0.2)"/>
        <text x="900" y="410" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="30">😊</text>
      `
      break

    case 'water':
      svgContent = `
        <rect width="1200" height="630" fill="url(#waterGradient)"/>
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4facfe"/>
            <stop offset="100%" style="stop-color:#00f2fe"/>
          </linearGradient>
        </defs>
        <text x="600" y="200" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">💧 Water Logged!</text>
        <text x="600" y="260" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="32">Great job staying hydrated!</text>
        <text x="600" y="320" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="28">${value || '1'} glass${(value || '1') !== '1' ? 'es' : ''} logged today</text>
      `
      break

    case 'steps':
      svgContent = `
        <rect width="1200" height="630" fill="url(#stepsGradient)"/>
        <defs>
          <linearGradient id="stepsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f093fb"/>
            <stop offset="100%" style="stop-color:#f5576c"/>
          </linearGradient>
        </defs>
        <text x="600" y="200" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">🚶 Steps Logged!</text>
        <text x="600" y="260" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="32">Keep up the great work!</text>
        <text x="600" y="320" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="28">${value || '1000'} steps added to your total</text>
      `
      break

    case 'mood':
      const moodEmoji = getMoodEmoji(parseInt(value || '3'))
      const moodLabel = getMoodLabel(parseInt(value || '3'))
      svgContent = `
        <rect width="1200" height="630" fill="url(#moodGradient)"/>
        <defs>
          <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a8edea"/>
            <stop offset="100%" style="stop-color:#fed6e3"/>
          </linearGradient>
        </defs>
        <text x="600" y="180" text-anchor="middle" fill="#333" font-family="Arial, sans-serif" font-size="64">${moodEmoji}</text>
        <text x="600" y="250" text-anchor="middle" fill="#333" font-family="Arial, sans-serif" font-size="48" font-weight="bold">Mood Logged!</text>
        <text x="600" y="310" text-anchor="middle" fill="#333" font-family="Arial, sans-serif" font-size="32">Feeling ${moodLabel.toLowerCase()} today</text>
        <text x="600" y="360" text-anchor="middle" fill="#666" font-family="Arial, sans-serif" font-size="24">Thanks for sharing how you're feeling!</text>
      `
      break

    default:
      svgContent = `
        <rect width="1200" height="630" fill="#667eea"/>
        <text x="600" y="315" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">HealthWise Companion</text>
      `
  }

  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      ${svgContent}
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=300',
    },
  })
}

function getMoodEmoji(mood: number): string {
  switch (mood) {
    case 1: return '😢'
    case 2: return '😕'
    case 3: return '😐'
    case 4: return '🙂'
    case 5: return '😊'
    default: return '😐'
  }
}

function getMoodLabel(mood: number): string {
  switch (mood) {
    case 1: return 'Very Low'
    case 2: return 'Low'
    case 3: return 'Neutral'
    case 4: return 'Good'
    case 5: return 'Excellent'
    default: return 'Neutral'
  }
}

