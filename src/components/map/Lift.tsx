import React from 'react';
import { LiftProps } from './types';

const statusColors = {
  open: '#00B140',
  closed: '#FF0000',
  hold: '#FFA500',
  scheduled: '#808080'
};

export const Lift: React.FC<LiftProps> = ({
  name,
  type,
  status,
  coordinates,
  loadingZones
}) => {
  return (
    <g className="lift">
      {/* Lift Line */}
      <path
        d={`M ${coordinates.map(([x, y]) => `${x} ${y}`).join(' L ')}`}
        stroke={statusColors[status]}
        strokeWidth={2}
        strokeDasharray={type === 'gondola' ? '5,5' : 'none'}
        fill="none"
      />
      
      {/* Loading Zones */}
      {Object.entries(loadingZones).map(([position, [x, y]]) => (
        <g key={position} className="loading-zone">
          <circle
            cx={x}
            cy={y}
            r={6}
            fill={statusColors[status]}
          />
          <text
            x={x}
            y={y + 20}
            textAnchor="middle"
            fill="#333"
            fontSize="12"
          >
            {position === 'bottom' ? 'Load' : 'Unload'}
          </text>
        </g>
      ))}

      {/* Lift Name and Status */}
      <text
        x={coordinates[Math.floor(coordinates.length / 2)][0]}
        y={coordinates[Math.floor(coordinates.length / 2)][1]}
        textAnchor="middle"
        dy="-1em"
        fill="#333"
        fontSize="14"
        fontWeight="bold"
      >
        {name}
        <tspan
          x={coordinates[Math.floor(coordinates.length / 2)][0]}
          dy="1.2em"
          fontSize="12"
          fill={statusColors[status]}
        >
          ({status})
        </tspan>
      </text>

      {/* Lift Icons */}
      {coordinates.filter((_, i) => i % 3 === 0).map(([x, y], i) => (
        <use
          key={i}
          href={`#icon-${type}`}
          x={x - 8}
          y={y - 8}
          width={16}
          height={16}
        />
      ))}
    </g>
  );
};
