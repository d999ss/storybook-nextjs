import React from 'react';
import { ZoneProps, ZoneType } from './types';

const zoneStyles: Record<ZoneType, { fill: string; opacity: number }> = {
  beginner: { fill: '#90EE90', opacity: 0.3 },
  'terrain-park': { fill: '#FFD700', opacity: 0.3 },
  slow: { fill: '#FFA500', opacity: 0.2 },
  'avalanche-prone': { fill: '#FF4500', opacity: 0.3 },
  learning: { fill: '#98FB98', opacity: 0.3 }
};

const zoneIcons: Record<ZoneType, string> = {
  beginner: '🔰',
  'terrain-park': '🏂',
  slow: '⚠️',
  'avalanche-prone': '⚡',
  learning: '📚'
};

export const Zone: React.FC<ZoneProps> = ({
  type,
  name,
  coordinates
}) => {
  const style = zoneStyles[type];
  const icon = zoneIcons[type];
  
  // Calculate center point for label
  const centerX = coordinates.reduce((sum, [x]) => sum + x, 0) / coordinates.length;
  const centerY = coordinates.reduce((sum, [, y]) => sum + y, 0) / coordinates.length;

  return (
    <g className={`zone zone-${type}`}>
      <path
        d={`M ${coordinates.map(([x, y]) => `${x} ${y}`).join(' L ')} Z`}
        fill={style.fill}
        fillOpacity={style.opacity}
        stroke="#666"
        strokeWidth={1}
        strokeDasharray={type === 'slow' ? '5,5' : 'none'}
      />
      
      <g transform={`translate(${centerX}, ${centerY})`}>
        <text
          textAnchor="middle"
          dy="-1em"
          fontSize="16"
        >
          {icon}
        </text>
        {name && (
          <text
            textAnchor="middle"
            dy="1em"
            fill="#333"
            fontSize="12"
            fontWeight="bold"
          >
            {name}
          </text>
        )}
      </g>
    </g>
  );
};
