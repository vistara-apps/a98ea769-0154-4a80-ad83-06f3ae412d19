import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'HealthWise Companion',
  description: 'Your personalized daily health nudges and progress tracker',
  openGraph: {
    title: 'HealthWise Companion',
    description: 'Your personalized daily health nudges and progress tracker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthWise Companion',
    description: 'Your personalized daily health nudges and progress tracker',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
