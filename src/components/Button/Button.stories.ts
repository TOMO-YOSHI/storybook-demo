import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTypes } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abwSOf8tjlq7wdoVCcI2pv/Untitled?type=design&node-id=3-5&mode=dev'
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    btnType: {
      control: 'radio',
      options: ['primary', 'secondary']
    },
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    disabled: {
      cotrol: 'boolean'
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Hello SB',
    btnType: 'primary' as ButtonTypes
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    btnType: 'secondary' as ButtonTypes
  },
};