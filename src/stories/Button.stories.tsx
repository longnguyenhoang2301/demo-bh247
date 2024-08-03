import type { Meta, StoryObj } from '@storybook/react';
import { BaseButton } from '../components';

const meta = {
  title: 'CUSTOM/Button',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
    onClick: () => {console.log('haha')}
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    onClick: () => {console.log('haha')}
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    onClick: () => {console.log('haha')}
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    onClick: () => {console.log('haha')}
  },
};
