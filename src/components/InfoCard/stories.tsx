import { Story, Meta } from '@storybook/react'

import InfoCard, { InfoCardProps } from '.'

import { TwentyFourHours } from '@styled-icons/remix-fill/TwentyFourHours'

export default {
  title: 'InfoCard',
  component: InfoCard,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    icon: <TwentyFourHours size={24} />,
    title: 'Suporte 24/7',
    description:
      'O nosso suporte é de 24 horas por dia e 7 dias por semana para os Clientes, Profissionais e Parceiros.'
  }
} as Meta

export const Default: Story<InfoCardProps> = (args) => <InfoCard {...args} />
