import { Story, Meta } from '@storybook/react'

import FollowCardSlider, { FollowCardSliderProps } from '.'

import mock from './mock'

export default {
  title: 'FollowCardSlider',
  component: FollowCardSlider,
  args: { items: mock }
} as Meta

export const Default: Story<FollowCardSliderProps> = (args) => (
  <FollowCardSlider {...args} />
)
