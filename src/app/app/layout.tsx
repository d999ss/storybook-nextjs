import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ski Resort Map Components',
  description: 'Storybook components for ski resort mapping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
