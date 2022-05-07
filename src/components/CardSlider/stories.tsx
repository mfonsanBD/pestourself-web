import { Story, Meta } from '@storybook/react'

import CardSlider, { CardSliderProps } from '.'
import mock from './mock'

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items: mock }
} as Meta

export const Default: Story<CardSliderProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)
