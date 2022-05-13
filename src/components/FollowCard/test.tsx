import { render, screen } from '@testing-library/react'

import FollowCard from '.'

const props = {
  photoUrl: '/img/user-photo.jpg',
  name: 'User Name',
  createdAt: '2022-05-12T23:00:00',
  followers: 52,
  following: 30
}

describe('<FollowCard />', () => {
  it('should render the heading', () => {
    render(<FollowCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /user name/i })
    ).toBeInTheDocument()
  })
})
