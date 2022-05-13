import { ComponentStory, ComponentMeta } from '@storybook/react'

import Testimonial from '.'

export default {
  title: 'Testimonial',
  component: Testimonial
} as ComponentMeta<typeof Testimonial>

export const Default: ComponentStory<typeof Testimonial> = (args) => (
  <Testimonial {...args} />
)

Default.args = {
  message:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  img: '/img/user-photo.jpg',
  name: 'User Name',
  userSince: '2022-05-12T23:00:00'
}
