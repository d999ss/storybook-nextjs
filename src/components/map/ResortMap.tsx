import React from 'react';
import { Trail } from './Trail';
import { Lift } from './Lift';
import { Zone } from './Zone';
import { MapIcons } from './Icons';
import { TrailProps, LiftProps, ZoneProps } from './types';

interface ResortMapProps {
  boundaries: [number, number][];
  trails: TrailProps[];
  lifts: LiftProps[];
  zones: ZoneProps[];
  width?: number;
  height?: number;
}

export const ResortMap: React.FC<ResortMapProps> = ({
  boundaries,
  trails,
  lifts,
  zones,
  width = 800,
  height = 600,
}) => {
  // Calculate viewBox based on boundaries
  const minX = Math.min(...boundaries.map(([x]) => x));
  const maxX = Math.max(...boundaries.map(([x]) => x));
  const minY = Math.min(...boundaries.map(([, y]) => y));
  const maxY = Math.max(...boundaries.map(([, y]) => y));
  
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${minX - 10} ${minY - 10} ${maxX - minX + 20} ${maxY - minY + 20}`}
      style={{ backgroundColor: '#fff' }}
    >
      <MapIcons />
      
      {/* Resort Boundary */}
      <path
        d={`M ${boundaries.map(([x, y]) => `${x} ${y}`).join(' L ')} Z`}
        fill="none"
        stroke="#666"
        strokeWidth={2}
        strokeDasharray="5,5"
      />
      
      {/* Zones */}
      {zones.map((zone) => (
        <Zone key={zone.id} {...zone} />
      ))}
      
      {/* Trails */}
      {trails.map((trail) => (
        <Trail key={trail.id} {...trail} />
      ))}
      
      {/* Lifts */}
      {lifts.map((lift) => (
        <Lift key={lift.id} {...lift} />
      ))}
    </svg>
  );
};
