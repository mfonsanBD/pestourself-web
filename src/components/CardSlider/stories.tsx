import { Story, Meta } from '@storybook/react'

import CardSlider, { CardSliderProps } from '.'
import partnersMock from './partners'
import advertiserMock from './advertiser'

export default {
  title: 'CardSlider',
  component: CardSlider
} as Meta

export const Partners: Story<CardSliderProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)

Partners.args = {
  items: partnersMock
}

export const Advertiser: Story<CardSliderProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)

Advertiser.args = {
  items: advertiserMock
}
