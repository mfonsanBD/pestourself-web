import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/link'
}

export const asMinimal: Story<ButtonProps> = (args) => <Button {...args} />

asMinimal.args = {
  children: 'Buy Now',
  minimal: true
}
