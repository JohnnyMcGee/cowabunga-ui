import type { Meta, StoryObj } from '@storybook/svelte';

import ButtonView from "./ButtonView.svelte";

const meta = {
  title: 'Atoms/Button',
  component: ButtonView,
  tags: ['autodocs'],
  argTypes: {
    slotContent: {
      type: 'string',
      description: "Button content is not actually a prop, but a slot accepting any valid html or svelte component."
    },
    size: {
      type: 'string',
      description: 'large and small sizes adjust the padding and font-size of the button'
    }
  }
} satisfies Meta<ButtonView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Button",
  args: {
    slotContent: "Pizza Time!",
  }
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small'
  }
};