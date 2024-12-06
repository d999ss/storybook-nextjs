import React from 'react';
import { TrailProps, TrailDifficulty } from './types';

const difficultyColors: Record<TrailDifficulty, string> = {
  green: '#00B140',
  blue: '#0066CC',
  black: '#000000',
  'double-black': '#000000'
};

export const Trail: React.FC<TrailProps> = ({
  name,
  difficulty,
  isClosed = false,
  coordinates
}) => {
  const strokeColor = difficultyColors[difficulty];
  
  return (
    <g className="trail">
      <path
        d={`M ${coordinates.map(([x, y]) => `${x} ${y}`).join(' L ')}`}
        stroke={strokeColor}
        strokeWidth={4}
        fill="none"
        className={`trail-path ${isClosed ? 'opacity-50' : ''}`}
      />
      {isClosed && (
        <g className="closed-indicator">
          <circle
            cx={coordinates[0][0]}
            cy={coordinates[0][1]}
            r={8}
            fill="red"
          />
          <text
            x={coordinates[0][0]}
            y={coordinates[0][1]}
            textAnchor="middle"
            dy=".3em"
            fill="white"
            fontSize="12"
          >
            X
          </text>
        </g>
      )}
      <text
        x={coordinates[Math.floor(coordinates.length / 2)][0]}
        y={coordinates[Math.floor(coordinates.length / 2)][1]}
        textAnchor="middle"
        dy="-0.5em"
        fill={strokeColor}
        fontSize="14"
        fontWeight="bold"
      >
        {name}
      </text>
    </g>
  );
};
