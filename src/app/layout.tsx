import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Ski Resort Map',
  description: 'Interactive ski resort map built with Next.js and Storybook',
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
