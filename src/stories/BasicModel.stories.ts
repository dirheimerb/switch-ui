import type { Meta, StoryObj } from '@storybook/react';
import BasicModel from '../components/Models/BasicModel';

const meta: Meta<typeof BasicModel> = {
  title: 'Components/BasicModel',
  component: BasicModel,
  tags: ['basic', 'model', 'autodocs'],

  parameters: {
    actions: {
      handles: [
        'click',
        'keydown',
        'keyup',
        'keypress',
        'focus',
        'blur',
        'change',
        'input',
        'submit',
        'reset',
      ],
    },
    docs: {
      description: {
        component: 'This is a basic model component',
      },
    },
    layout: ['centered', 'fullscreen'],
    controls: {
      include: [
        'title',
        'message',
        'modelType',
        'buttonColor',
        'textColor',
        'hoverTextColor',
        'width',
        'buttonTitle',
        'modalButtonColorType',
        'modalButtonTextType',
        'modalButtonTitle',
      ],
    },
  },
  argTypes: {
    modalButtonColorType: {
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
    modalButtonTextType: {
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
    modalButtonTitle: {
        control: {
            type: 'string',
        },
    },
    width: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    buttonColor: {
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
    hoverTextColor: {
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
      modelType: {
        control: {
          type: 'select',
          options: ['basic', 'confirm', 'alert'],
        },
      },
      buttonTitle: {
        control: {
          type: 'string',
        },
      },
      title: {
        control: {
          type: 'string',
        },
      },
      message: {
        control: {
          type: 'string',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasicModel>;

export const Basic: Story = {
  args: {
    title: 'Basic Model',
    message: 'This is a basic model',
    modelType: 'basic',
    buttonColor: 'sky',
    textColor: 'gray',
    hoverTextColor: 'gray',
    buttonTitle: 'OK',
    width: 'md',
  },
};

export const Confirm: Story = {
  args: {
    title: 'Confirm Model',
    message: 'This is a confirm model',
    modelType: 'confirm',
    buttonColor: 'sky',
    textColor: 'green',
    hoverTextColor: 'green',
    buttonTitle: 'OK',
    width: 'md',
  },
};

export const Alert: Story = {
  args: {
    title: 'Alert Model',
    message: 'This is an alert model',
    modelType: 'alert',
    buttonColor: 'red',
    buttonTitle: 'OK',
    width: 'md',
  },
};

export const SmallAlert: Story = {
  args: {
    title: 'Alert Model',
    message: 'This is an alert model',
    modelType: 'alert',
    buttonColor: 'red',
    buttonTitle: 'OK',
    width: 'sm',
  },
};

export const LargeAlert: Story = {
  args: {
    title: 'Alert Model',
    message: 'This is an alert model',
    modelType: 'alert',
    buttonColor: 'red',
    buttonTitle: 'OK',
    width: 'lg',
  },
};
