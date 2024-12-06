import type { Meta, StoryObj } from '@storybook/react';
import { ResortMap } from '../components/map/ResortMap';

const meta: Meta<typeof ResortMap> = {
  title: 'Map/ResortMap',
  component: ResortMap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResortMap>;

export const CompleteResort: Story = {
  args: {
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
      {
        id: '3',
        name: 'The Edge',
        difficulty: 'black',
        coordinates: [[300, 100], [500, 500]],
      },
      {
        id: '4',
        name: 'Powder Bowl',
        difficulty: 'black',
        isClosed: true,
        coordinates: [[400, 100], [600, 300]],
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
      {
        id: '2',
        name: 'Village Gondola',
        type: 'gondola',
        status: 'open',
        coordinates: [[600, 500], [700, 100]],
        loadingZones: {
          bottom: [600, 500],
          top: [700, 100],
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
      {
        id: '2',
        type: 'terrain-park',
        name: 'Freestyle Zone',
        coordinates: [[300, 300], [400, 300], [350, 400]],
      },
      {
        id: '3',
        type: 'slow',
        name: 'Family Zone',
        coordinates: [[500, 200], [600, 200], [600, 300], [500, 300]],
      },
      {
        id: '4',
        type: 'avalanche-prone',
        name: 'High Risk Area',
        coordinates: [[650, 100], [750, 100], [700, 200]],
      },
    ],
  },
};
