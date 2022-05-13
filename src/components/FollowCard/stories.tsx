import { Story, Meta } from '@storybook/react'

import FollowCard, { FollowCardProps } from '.'

const props = {
  photoUrl: '/img/user-photo.jpg',
  name: 'User Name',
  createdAt: '2022-05-12T23:00:00',
  followers: 52,
  following: 30
}

export default {
  title: 'FollowCard',
  component: FollowCard,
  args: { ...props },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<FollowCardProps> = (args) => (
  <div style={{ width: '29.1rem' }}>
    <FollowCard {...args} />
  </div>
)
