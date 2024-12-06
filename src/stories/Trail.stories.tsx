import type { Meta, StoryObj } from '@storybook/react';
import { Trail } from '../components/map/Trail';

const meta: Meta<typeof Trail> = {
  title: 'Map/Trail',
  component: Trail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trail>;

export const GreenTrail: Story = {
  args: {
    id: '1',
    name: 'Easy Street',
    difficulty: 'green',
    coordinates: [[10, 10], [50, 50], [90, 90]],
  },
};

export const BlueTrail: Story = {
  args: {
    id: '2',
    name: 'Blue Bird',
    difficulty: 'blue',
    coordinates: [[10, 90], [50, 50], [90, 10]],
  },
};

export const BlackTrail: Story = {
  args: {
    id: '3',
    name: 'The Edge',
    difficulty: 'black',
    coordinates: [[10, 50], [90, 50]],
  },
};

export const ClosedTrail: Story = {
  args: {
    id: '4',
    name: 'Powder Bowl',
    difficulty: 'black',
    isClosed: true,
    coordinates: [[10, 30], [50, 70], [90, 30]],
  },
};
