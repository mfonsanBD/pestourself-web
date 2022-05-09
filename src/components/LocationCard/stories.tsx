import { Story, Meta } from '@storybook/react'
import LocationCard, { LocationCardProps } from '.'

export default {
  title: 'LocationCard',
  component: LocationCard,
  args: {
    coverUrl: '/img/location.png',
    coverAlt: 'Cristo Redentor - RJ',
    location: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
    total: 6
  }
} as Meta

export const Default: Story<LocationCardProps> = (args) => (
  <LocationCard {...args} />
)
