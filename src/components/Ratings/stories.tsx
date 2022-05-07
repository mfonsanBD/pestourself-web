import { Story, Meta } from '@storybook/react'
import Ratings, { RatingsProps } from '.'

export default {
  title: 'Ratings',
  component: Ratings,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: { rating: 4.9 }
} as Meta

export const Default: Story<RatingsProps> = (args) => <Ratings {...args} />
