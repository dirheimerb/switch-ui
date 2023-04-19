import type { Meta, StoryObj } from '@storybook/react';
import Badge, { BadgeProps } from '../components/Badges/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Badges are used to display messages to the user.',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'gray',
          'red',
          'yellow',
          'green',
          'emerald',
          'blue',
          'sky',
          'indigo',
          'purple',
          'pink',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['light', 'normal', 'medium', 'bold', 'extrabold'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    message: 'Default',
    color: 'gray',
    size: 'md',
    fontWeight: 'light',
  },
};

export const Gray: Story = {
  args: {
    message: 'Gray',
    color: 'gray',
    size: 'md',
    fontWeight: 'normal',
  },
};

export const Red: Story = {
  args: {
    message: 'Red',
    color: 'red',
    size: 'md',
    fontWeight: 'medium',
  },
};

export const Yellow: Story = {
  args: {
    message: 'Yellow',
    color: 'yellow',
    size: 'md',
    fontWeight: 'bold',
  },
};

export const Green: Story = {
  args: {
    message: 'Green',
    color: 'green',
    size: 'md',
    fontWeight: 'extrabold',
  },
};

export const Emerald: Story = {
  args: {
    message: 'Emerald',
    color: 'emerald',
    size: 'md',
    fontWeight: 'extrabold',
  },
};

export const Blue: Story = {
  args: {
    message: 'Blue',
    color: 'blue',
    size: 'md',
    fontWeight: 'extrabold',
  },
};

export const Sky: Story = {
  args: {
    message: 'Sky',
    color: 'sky',
    size: 'md',
    fontWeight: 'extrabold',
  },
};

export const Indigo: Story = {
  args: {
    message: 'Indigo',
    color: 'indigo',
    size: 'md',
    fontWeight: 'bold',
  },
};

export const Purple: Story = {
  args: {
    message: 'Purple',
    color: 'purple',
    size: 'md',
    fontWeight: 'medium',
  },
};

export const Pink: Story = {
  args: {
    message: 'Pink',
    color: 'pink',
    size: 'md',
    fontWeight: 'normal',
  },
};

export const Small: Story = {
  args: {
    message: 'Small',
    size: 'sm',
    color: 'gray',
    fontWeight: 'light',
  },
};

export const Medium: Story = {
  args: {
    message: 'Medium',
    size: 'md',
    color: 'blue',
  },
};

export const Large: Story = {
  args: {
    message: 'Large',
    size: 'lg',
    color: 'green',
  },
};

export const ExtraLarge: Story = {
  args: {
    message: 'Extra Large',
    size: 'xl',
    color: 'pink',
  },
};
