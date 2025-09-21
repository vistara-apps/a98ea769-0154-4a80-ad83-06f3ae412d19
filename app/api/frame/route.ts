import { NextRequest, NextResponse } from 'next/server'
import { dailyTips, getRandomTip } from '@/lib/data'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { untrustedData } = body

    if (!untrustedData) {
      return NextResponse.json({ error: 'Invalid frame data' }, { status: 400 })
    }

    const { buttonIndex, castId } = untrustedData

    // Get current tip (in production, this would be stored per user)
    const currentTip = getRandomTip(dailyTips)

    // Handle different button actions
    let responseHtml = ''
    let buttons: any[] = []

    switch (buttonIndex) {
      case 1: // Log Water
        responseHtml = `
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/image?type=water&value=1" />
              <meta property="fc:frame:button:1" content="Log Another Glass" />
              <meta property="fc:frame:button:2" content="View Progress" />
              <meta property="fc:frame:button:3" content="Back to Dashboard" />
            </head>
            <body>
              <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="font-size: 24px; margin-bottom: 10px;">💧 Water Logged!</h1>
                <p style="font-size: 16px; text-align: center;">Great job staying hydrated! You've logged 1 glass of water.</p>
              </div>
            </body>
          </html>
        `
        break

      case 2: // Log Steps
        responseHtml = `
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/image?type=steps&value=1000" />
              <meta property="fc:frame:button:1" content="Add 1000 More Steps" />
              <meta property="fc:frame:button:2" content="View Progress" />
              <meta property="fc:frame:button:3" content="Back to Dashboard" />
            </head>
            <body>
              <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="font-size: 24px; margin-bottom: 10px;">🚶 Steps Logged!</h1>
                <p style="font-size: 16px; text-align: center;">Keep moving! You've added 1000 steps to your daily total.</p>
              </div>
            </body>
          </html>
        `
        break

      case 3: // Log Mood
        responseHtml = `
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/image?type=mood&value=4" />
              <meta property="fc:frame:button:1" content="Update Mood" />
              <meta property="fc:frame:button:2" content="View Progress" />
              <meta property="fc:frame:button:3" content="Back to Dashboard" />
            </head>
            <body>
              <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); color: #333; font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="font-size: 24px; margin-bottom: 10px;">😊 Mood Logged!</h1>
                <p style="font-size: 16px; text-align: center;">Thanks for sharing how you're feeling. Your mood helps us personalize your health journey.</p>
              </div>
            </body>
          </html>
        `
        break

      default: // Default dashboard
        responseHtml = `
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/image?type=dashboard" />
              <meta property="fc:frame:button:1" content="💧 Log Water" />
              <meta property="fc:frame:button:2" content="🚶 Log Steps" />
              <meta property="fc:frame:button:3" content="😊 Log Mood" />
              <meta property="fc:frame:button:4" content="📊 View Progress" />
            </head>
            <body>
              <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="font-size: 28px; margin-bottom: 10px;">HealthWise Companion</h1>
                <p style="font-size: 16px; text-align: center; margin-bottom: 20px;">Your personalized daily health nudges and progress tracker.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; text-align: center;">
                  <p style="font-size: 14px; margin: 0;">${currentTip.title}</p>
                  <p style="font-size: 12px; margin: 5px 0 0 0; opacity: 0.9;">${currentTip.description}</p>
                </div>
              </div>
            </body>
          </html>
        `
    }

    return new NextResponse(responseHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    })

  } catch (error) {
    console.error('Frame API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // Initial frame setup
  const currentTip = getRandomTip(dailyTips)

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/image?type=dashboard" />
        <meta property="fc:frame:button:1" content="💧 Log Water" />
        <meta property="fc:frame:button:2" content="🚶 Log Steps" />
        <meta property="fc:frame:button:3" content="😊 Log Mood" />
        <meta property="fc:frame:button:4" content="📊 View Progress" />
        <meta property="og:title" content="HealthWise Companion" />
        <meta property="og:description" content="Your personalized daily health nudges and progress tracker." />
      </head>
      <body>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="font-size: 28px; margin-bottom: 10px;">HealthWise Companion</h1>
          <p style="font-size: 16px; text-align: center; margin-bottom: 20px;">Your personalized daily health nudges and progress tracker.</p>
          <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; text-align: center;">
            <p style="font-size: 14px; margin: 0;">${currentTip.title}</p>
            <p style="font-size: 12px; margin: 5px 0 0 0; opacity: 0.9;">${currentTip.description}</p>
          </div>
        </div>
      </body>
    </html>
  `

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}

