import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    title: {
      type: 'string'
    },
    backTitle: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  title: 'Parceiros em Destaques',
  backTitle: 'Escolha os Melhores',
  description:
    'Esses são os parceiros com melhor avaliação em nossa plataforma',
  color: 'darkGray'
}
