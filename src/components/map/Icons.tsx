import React from 'react';

export const MapIcons: React.FC = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <symbol id="icon-chairlift" viewBox="0 0 24 24">
        <path d="M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4z" />
        <path d="M12 14l-5-7H4l5 7h3zm0 0l5-7h3l-5 7h-3z" />
      </symbol>
      
      <symbol id="icon-gondola" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9v7h14V9c0-3.87-3.13-7-7-7zm5 12H7v-3l2.5-5h5l2.5 5v3z" />
        <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </symbol>
    </defs>
  </svg>
);
