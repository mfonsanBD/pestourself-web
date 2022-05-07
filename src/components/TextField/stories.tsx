import React from 'react'
import { Email } from '@styled-icons/material-outlined/Email'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextField from '.'

export default {
  title: 'TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

export const Default: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

Default.args = {
  label: 'E-mail',
  name: 'email',
  icon: <Email />,
  initialValue: '',
  placeholder: 'john.cage@gmail.com',
  disabled: false
}

export const WithError: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

WithError.args = {
  label: 'E-mail',
  name: 'email',
  icon: <Email />,
  initialValue: '',
  placeholder: 'john.cage@gmail.com',
  disabled: false,
  error: 'Ops...something is wrong'
}
