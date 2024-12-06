import type { Meta, StoryObj } from '@storybook/react';
import { Zone } from '../components/map/Zone';

const meta: Meta<typeof Zone> = {
  title: 'Map/Zone',
  component: Zone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Zone>;

export const BeginnerZone: Story = {
  args: {
    id: '1',
    type: 'beginner',
    name: 'Learning Area',
    coordinates: [[10, 10], [90, 10], [90, 90], [10, 90]],
  },
};

export const TerrainPark: Story = {
  args: {
    id: '2',
    type: 'terrain-park',
    name: 'Freestyle Zone',
    coordinates: [[10, 10], [90, 10], [50, 90]],
  },
};

export const SlowZone: Story = {
  args: {
    id: '3',
    type: 'slow',
    name: 'Family Zone',
    coordinates: [[30, 10], [70, 10], [70, 50], [30, 50]],
  },
};

export const AvalancheZone: Story = {
  args: {
    id: '4',
    type: 'avalanche-prone',
    name: 'High Risk Area',
    coordinates: [[10, 10], [90, 10], [50, 90]],
  },
};

export const LearningArea: Story = {
  args: {
    id: '5',
    type: 'learning',
    name: 'Ski School',
    coordinates: [[20, 20], [80, 20], [80, 80], [20, 80]],
  },
};
