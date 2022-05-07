import { Story, Meta } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ float: 'right' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  username: 'anorak27'
}
