import { Story, Meta } from '@storybook/react'
import CardGallery, { CardGalleryProps } from '.'

import items from './mock'

export default {
  title: 'CardGallery',
  component: CardGallery,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CardGalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardGallery {...args} />
  </div>
)
