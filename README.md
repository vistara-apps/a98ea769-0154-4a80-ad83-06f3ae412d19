# HealthWise Companion

Your personalized daily health nudges and progress tracker - a Base MiniApp for Farcaster.

## Overview

HealthWise Companion is a MiniApp built for the Base ecosystem that provides users with personalized daily health tips and simple metric tracking to enhance their overall well-being. The app leverages Farcaster Frames for interactive experiences within the Farcaster ecosystem.

## Features

### Core Features

1. **Daily Actionable Health Nudges**
   - Hyper-specific, actionable health tips delivered daily
   - Covers hydration, exercise, mindfulness, nutrition, and sleep
   - Tips are designed to be immediately implementable

2. **Simple Health Metric Tracking**
   - Easy logging of key health metrics: water intake, steps, and mood
   - Minimal interaction required using buttons and emoji selections
   - Progress tracking and summaries

3. **Goal-Specific Health Plans**
   - Short-term focused health challenges (3-14 days)
   - Pre-built plans: Hydration Boost, Mindful Morning, Step Challenge
   - Progress tracking with visual indicators

### Technical Features

- **Farcaster Frame Integration**: Interactive frames for seamless user experience
- **Base MiniApp**: Native integration with Base Wallet and Farcaster ecosystem
- **Responsive Design**: Optimized for mobile and frame environments
- **Real-time Updates**: Dynamic frame images and state management

## Technical Specifications

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Frame SDK**: Farcaster Frame SDK
- **Base Integration**: Base MiniKit SDK

### Data Model

#### User Entity
```typescript
interface User {
  userId: string
  farcasterId: string
  createdAt: Date
  preferences: UserPreferences
}
```

#### HealthLog Entity
```typescript
interface HealthLog {
  logId: string
  userId: string
  timestamp: Date
  metricType: 'water' | 'steps' | 'mood' | 'sleep' | 'exercise'
  value: number | string
  notes?: string
}
```

#### ActivePlan Entity
```typescript
interface ActivePlan {
  planId: string
  userId: string
  planType: 'hydration-boost' | 'mindful-morning' | 'step-challenge'
  startDate: Date
  endDate: Date
  progress: number // 0-100
}
```

### Design System

#### Color Palette
- **Primary**: `hsl(180, 70%, 40%)` - Teal
- **Accent**: `hsl(280, 70%, 50%)` - Purple
- **Background**: `hsl(210, 20%, 95%)` - Light blue-gray
- **Surface**: `hsl(0, 0%, 100%)` - White
- **Text**: `hsl(210, 20%, 10%)` - Dark blue-gray
- **Muted**: `hsl(210, 20%, 60%)` - Medium blue-gray

#### Typography
- **Display**: `text-2xl font-bold text-text`
- **Heading**: `text-lg font-semibold text-text`
- **Body**: `text-base leading-6 text-text`
- **Caption**: `text-sm text-muted`

#### Spacing & Layout
- **Border Radius**: `sm: 4px, md: 8px, lg: 12px`
- **Spacing**: `sm: 4px, md: 8px, lg: 16px, xl: 24px`
- **Shadows**: `card: 0 2px 8px hsla(0, 0%, 0%, 0.1)`

### API Endpoints

#### Frame Interaction API
**POST** `/api/frame`

Handles Farcaster frame interactions and state management.

**Request Body:**
```json
{
  "untrustedData": {
    "buttonIndex": 1,
    "castId": "0x...",
    "input": "..."
  }
}
```

**Response:** HTML with updated frame metadata

#### Frame Image API
**GET** `/api/frame/image?type={type}&value={value}`

Generates dynamic SVG images for frame displays.

**Query Parameters:**
- `type`: `dashboard | water | steps | mood`
- `value`: Metric value (optional)

**Response:** SVG image

### User Flows

#### Daily Interaction Flow
1. User opens the MiniApp frame
2. Displays current day's health tip
3. User can log metrics via button taps
4. Frame updates to show logged actions
5. User can view progress summaries

#### Onboarding Flow
1. User clicks Farcaster frame to open MiniApp
2. Brief introduction to HealthWise
3. Farcaster identity connection (via Base SDK)
4. Optional primary health focus selection
5. User lands on main dashboard with first tip

### Business Model

**Type**: Micro-transactions
**Pricing**: $1-$5 per feature unlock or plan
**Justification**: Free MVP with monetization for enhanced features

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthwise-companion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Deployment

### Environment Variables
```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
FARCASTER_APP_SECRET=your-farcaster-secret
FARCASTER_APP_ID=your-farcaster-app-id
```

### Frame Configuration
The app uses Farcaster Frames vNext specification. Ensure your deployment supports:
- Dynamic meta tags
- POST request handling
- SVG image generation

## Development Guidelines

### Code Structure
```
app/
├── api/frame/          # Frame interaction APIs
├── components/ui/      # Reusable UI components
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx           # Main dashboard

lib/
├── data.ts            # Mock data and constants
└── utils.ts           # Utility functions

types/
└── index.ts           # TypeScript type definitions
```

### Component Guidelines
- Use functional components with TypeScript
- Follow the design system tokens
- Implement proper error handling
- Add helpful comments for complex logic
- Keep components modular and reusable

### State Management
- Use React hooks for local state
- Implement proper loading and error states
- Persist user data appropriately
- Handle frame state management

## API Documentation

### Frame API Response Format
```html
<!DOCTYPE html>
<html>
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="image-url" />
    <meta property="fc:frame:button:1" content="Button Text" />
    <!-- Additional button metas -->
  </head>
  <body>
    <!-- Frame content -->
  </body>
</html>
```

### Error Handling
- API endpoints return appropriate HTTP status codes
- Frame errors display user-friendly messages
- Logging implemented for debugging

## Contributing

1. Follow the established code structure
2. Implement proper TypeScript types
3. Add tests for new features
4. Update documentation as needed
5. Follow the design system guidelines

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Check the Farcaster Frames documentation
- Review Base MiniApp guidelines

