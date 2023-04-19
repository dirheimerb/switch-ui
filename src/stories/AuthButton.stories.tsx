import type { Meta, StoryObj } from '@storybook/react';
import AuthButton from '../components/Buttons/AuthButton';

const meta: Meta<typeof AuthButton> = {
  title: 'Components/Buttons/AuthButton',
  component: AuthButton,
  tags: ['button', 'auth', 'autodocs'],
  parameters: {
    actions: {
      handles: ['click', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout'],
      argTypesRegex: '^on.*',
    },
    layout: ['centered', 'fullscreen'],
    docs: {
      description: {
        component:
          'This is a button that will either sign in or sign out a user depending on their current session.',
      },
    },
    controls: {
      include: [
        'width',
        'textColor',
        'backgroundColor',
        'hoverBackgroundColor',
        'shadow',
        'rounded',
      ],
    },
  },
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    textColor: {
      control: {
        type: 'select',
        options: [
          'sky',
          'gray',
          'blue',
          'red',
          'yellow',
          'green',
          'purple',
          'pink',
          'indigo',
        ],
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: [
          'sky',
          'gray',
          'blue',
          'red',
          'yellow',
          'green',
          'purple',
          'pink',
          'indigo',
        ],
      },
    },
    hoverBackgroundColor: {
      control: {
        type: 'select',
        options: [
          'sky',
          'gray',
          'blue',
          'red',
          'yellow',
          'green',
          'purple',
          'pink',
          'indigo',
        ],
      },
    },
    shadow: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', 'none'],
      },
    },
    rounded: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', 'none'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuthButton>;

export const Default: Story = {
  args: {
    width: 'lg',
    textColor: 'sky',
    backgroundColor: 'gray',
    hoverBackgroundColor: 'blue',
    shadow: 'none',
    rounded: 'md',
  },
};

export const Small: Story = {
  args: {
    width: 'sm',
    textColor: 'sky',
    backgroundColor: 'gray',
    hoverBackgroundColor: 'blue',
    shadow: 'none',
    rounded: 'md',
  },
};

export const Medium: Story = {
  args: {
    width: 'md',
    textColor: 'sky',
    backgroundColor: 'gray',
    hoverBackgroundColor: 'blue',
    shadow: 'none',
    rounded: 'md',
  },
};

export const Large: Story = {
  args: {
    width: 'lg',
    textColor: 'sky',
    backgroundColor: 'gray',
    hoverBackgroundColor: 'blue',
    shadow: 'none',
    rounded: 'md',
  },
};

export const ExtraLarge: Story = {
  args: {
    width: 'xl',
    textColor: 'sky',
    backgroundColor: 'gray',
    hoverBackgroundColor: 'blue',
    shadow: 'none',
    rounded: 'md',
  },
};
