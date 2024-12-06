import React from 'react';
import { ResortMap } from '../components/map/ResortMap';
import type { TrailProps, LiftProps, ZoneProps } from '../components/map/types';

const demoData = {
  boundaries: [
    [40.7128, -74.0060],
    [40.7129, -74.0065],
    [40.7130, -74.0063],
    [40.7128, -74.0060]
  ] as [number, number][],
  trails: [
    {
      id: 'trail1',
      name: 'Easy Street',
      difficulty: 'green',
      coordinates: [
        [40.7128, -74.0060],
        [40.7129, -74.0061]
      ] as [number, number][]
    }
  ] as TrailProps[],
  lifts: [
    {
      id: 'lift1',
      name: 'Main Express',
      type: 'chairlift',
      status: 'open',
      coordinates: [
        [40.7128, -74.0060],
        [40.7129, -74.0061]
      ] as [number, number][],
      loadingZones: {
        bottom: [40.7128, -74.0060] as [number, number],
        top: [40.7129, -74.0061] as [number, number]
      }
    }
  ] as LiftProps[],
  zones: [
    {
      id: 'zone1',
      type: 'beginner',
      name: 'Learning Area',
      coordinates: [
        [40.7128, -74.0060],
        [40.7129, -74.0061],
        [40.7130, -74.0062],
        [40.7128, -74.0060]
      ] as [number, number][]
    }
  ] as ZoneProps[]
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Ski Resort Map</h1>
      <ResortMap {...demoData} />
    </main>
  );
}
