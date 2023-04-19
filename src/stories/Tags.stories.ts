import { Meta, StoryObj } from '@storybook/react';
import Tags, { Size, Color } from '../components/Tag/Tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tags',
      },
    },
    layout: ['centered', 'fullscreen'],
  },

  argTypes: {
    size: {
      control: {
        type: 'array',
      },
    },
    color: {
      control: {
        type: 'array',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tags>;

export const Default: Story = {
  args: {
    size: Size.Medium,
    color: Color.Sky,
  },
};

export const Small: Story = {
  args: {
    size: Size.Small,
    color: Color.Sky,
  },
};

export const Large: Story = {
  args: {
    size: Size.Large,
    color: Color.Sky,
  },
};

export const Rose: Story = {
  args: {
    size: Size.Medium,
    color: Color.Rose,
  },
};

export const Sky: Story = {
  args: {
    size: Size.Medium,
    color: Color.Sky,
  },
};

export const Green: Story = {
  args: {
    size: Size.Medium,
    color: Color.Emerald,
  },
};

export const Zinc: Story = {
  args: {
    size: Size.Medium,
    color: Color.Zinc,
  },
};
