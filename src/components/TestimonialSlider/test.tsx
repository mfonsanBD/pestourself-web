import { render, screen } from 'utils/test-utils'

import TestimonialSlider from '.'

import mock from './mock'

const props = {
  items: mock
}

describe('<TestimonialSlider />', () => {
  it('should render the heading', () => {
    render(<TestimonialSlider {...props} />)

    expect(
      screen.getByRole('heading', { name: /User Name 01/i })
    ).toBeInTheDocument()
  })
})
