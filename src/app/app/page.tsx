import React from 'react';
import { ResortMap } from '../src/components/map/ResortMap';

export default function Home() {
  const demoData = {
    boundaries: [
      [0, 0],
      [800, 0],
      [800, 600],
      [0, 600],
    ],
    trails: [
      {
        id: '1',
        name: 'Easy Street',
        difficulty: 'green',
        coordinates: [[100, 100], [300, 300], [500, 300]],
      },
      {
        id: '2',
        name: 'Blue Bird',
        difficulty: 'blue',
        coordinates: [[200, 100], [400, 400]],
      },
    ],
    lifts: [
      {
        id: '1',
        name: 'Summit Express',
        type: 'chairlift',
        status: 'open',
        coordinates: [[50, 500], [250, 100]],
        loadingZones: {
          bottom: [50, 500],
          top: [250, 100],
        },
      },
    ],
    zones: [
      {
        id: '1',
        type: 'beginner',
        name: 'Learning Area',
        coordinates: [[50, 400], [200, 400], [200, 500], [50, 500]],
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Ski Resort Map</h1>
      <ResortMap {...demoData} />
    </main>
  );
}
