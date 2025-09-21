# HealthWise Companion

Your personalized daily health nudges and progress tracker built as a Base Mini App.

## Features

- **Daily Actionable Health Nudges**: Get one hyper-specific, actionable health tip each day
- **Simple Health Metric Tracking**: Log water intake, steps, and mood with minimal interaction
- **Goal-Specific Health Plans**: Join short, focused challenges like "3-Day Hydration Boost"
- **Progress Tracking**: Visual progress indicators and streak tracking
- **Base Mini App Integration**: Native integration with Base App and Farcaster ecosystem

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file and add your API keys:
   ```bash
   cp .env.example .env.local
   ```

4. Add your MiniKit API key to `.env.local`:
   ```
   NEXT_PUBLIC_MINIKIT_API_KEY=your_minikit_api_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Base Integration**: MiniKit SDK
- **TypeScript**: Full type safety
- **Icons**: Lucide React

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main dashboard
│   ├── providers.tsx      # MiniKit provider setup
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── FrameContainer.tsx # Main frame wrapper
│   ├── DailyTipCard.tsx   # Daily health tip display
│   ├── LogButton.tsx      # Health metric logging
│   ├── ActionCard.tsx     # Interactive action cards
│   └── ProgressSummary.tsx # Progress visualization
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript definitions
│   ├── constants.ts      # App constants
│   └── utils.ts          # Utility functions
```

## Health Metrics

The app tracks three core health metrics:

1. **Water Intake**: Track glasses of water consumed (goal: 8 glasses/day)
2. **Steps**: Monitor daily step count (goal: 10,000 steps/day)
3. **Mood**: Rate your mood on a 1-5 scale (goal: 4+/day)

## Health Plans

Short-term challenges to build healthy habits:

- **3-Day Hydration Boost**: Focus on increasing water intake
- **Mindful Morning**: Start each day with 5 minutes of mindfulness
- **Step Challenge**: Gradually increase daily step count

## Base Mini App Features

- **Frame Integration**: Runs natively within Base App frames
- **Wallet Integration**: Connect with Base smart wallet
- **Social Features**: Share progress and achievements
- **Notifications**: Daily reminders and goal celebrations

## Development

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
