import { ComponentStory, ComponentMeta } from '@storybook/react'

import TestimonialSlider from '.'

import mock from './mock'

export default {
  title: 'TestimonialSlider',
  component: TestimonialSlider
} as ComponentMeta<typeof TestimonialSlider>

export const Default: ComponentStory<typeof TestimonialSlider> = (args) => (
  <TestimonialSlider {...args} />
)

Default.args = {
  items: mock
}
