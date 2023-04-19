import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['dropdown', 'autodocs'],
  parameters: {
    actions: {
      handles: ['click', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout'],
      argTypesRegex: '^on.*',
    },
    layout: ['centered', 'fullscreen'],
    docs: {
      description: {
        component:
          'This is a dropdown component that will render a trigger and a menu. The menu will be hidden by default and will be shown when the trigger is clicked.',
      },
    },
    controls: {
      include: ['buttonOpenLabel', 'buttonCloseLabel', 'menuItems'],
    },
  },
  argTypes: {
    buttonOpenLabel: {
      control: {
        type: 'text',
      },
    },
    buttonCloseLabel: {
      control: {
        type: 'text',
      },
    },
    menuItems: {
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    buttonOpenLabel: 'Open',
    buttonCloseLabel: 'Close',
    menuItems: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
};
