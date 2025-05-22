import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './web'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['button', 'a', 'span', 'div'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline'],
    },
    tone: {
      control: 'select',
      options: ['neutral', 'subtle', 'strong'],
    },
    intent: {
      control: 'select',
      options: ['info', 'danger', 'success', 'warning'],
    },
    shape: {
      control: 'select',
      options: ['square', 'pill', 'round'],
    },
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    className: { control: false },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click Me',
    as: 'button',
    size: 'md',
    variant: 'primary',
    tone: 'neutral',
    shape: 'round',
    elevation: 'none',
  },
}

export const AsLink: Story = {
  args: {
    children: 'Go to Docs',
    as: 'a',
    href: '/docs',
    variant: 'ghost',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    intent: 'danger',
    variant: 'outline',
  },
}

export const SubtleSmall: Story = {
  args: {
    children: 'Quiet',
    tone: 'subtle',
    size: 'sm',
    variant: 'ghost',
  },
}

export const PillSuccess: Story = {
  args: {
    children: 'Great Job',
    shape: 'pill',
    size: 'lg',
    intent: 'success',
  },
}
