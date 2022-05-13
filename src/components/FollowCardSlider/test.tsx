import { render, screen } from '@testing-library/react'

import FollowCardSlider from '.'

import mock from './mock'

const props = { items: mock }

describe('<FollowCardSlider />', () => {
  it('should render the heading', () => {
    render(<FollowCardSlider {...props} />)

    expect(
      screen.getByRole('heading', { name: /User Name 01/i })
    ).toBeInTheDocument()
  })
})
