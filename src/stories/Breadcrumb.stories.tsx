import type { Meta, StoryObj } from '@storybook/react';
import BreadCrumb from '../components/Breadcrumb/Breadcrumb';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Components/Breadcrumb',
  component: BreadCrumb,
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
        component: 'Breadcrumb is used to display the current page location.',
      },
    },
  },
  argTypes: {
    routes: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  args: {
    routes: [
      {
        label: 'Dashboard',
        href: '/dashboard',
      },
      {
        label: 'About',
        href: '/about',
      },
    ],
  },
};
