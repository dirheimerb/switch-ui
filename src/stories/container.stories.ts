import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Container } from '../components/container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['layout', 'container', 'autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A container component that centers the content and limits the width of the content to 1280px.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'This is a container',
  },
};

export const WithBackground: Story = {
  args: {
    children: 'This is a container',
  },
};
