import type { Meta, StoryObj } from '@storybook/react';
import { Lift } from '../components/map/Lift';

const meta: Meta<typeof Lift> = {
  title: 'Map/Lift',
  component: Lift,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Lift>;

export const OpenChairlift: Story = {
  args: {
    id: '1',
    name: 'Summit Express',
    type: 'chairlift',
    status: 'open',
    coordinates: [[10, 90], [50, 50], [90, 10]],
    loadingZones: {
      bottom: [10, 90],
      top: [90, 10],
    },
  },
};

export const ClosedGondola: Story = {
  args: {
    id: '2',
    name: 'Village Gondola',
    type: 'gondola',
    status: 'closed',
    coordinates: [[10, 10], [90, 90]],
    loadingZones: {
      bottom: [10, 10],
      top: [90, 90],
    },
  },
};

export const OnHoldLift: Story = {
  args: {
    id: '3',
    name: 'Ridge Lift',
    type: 'chairlift',
    status: 'hold',
    coordinates: [[10, 50], [90, 50]],
    loadingZones: {
      bottom: [10, 50],
      top: [90, 50],
    },
  },
};
