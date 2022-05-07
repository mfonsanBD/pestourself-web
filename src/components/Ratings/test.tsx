import { render, screen } from '@testing-library/react'

import Ratings from '.'

describe('<Ratings />', () => {
  it('should render the heading', () => {
    render(<Ratings rating={4.7} />)

    expect(screen.getByText(/muito bom/i)).toBeInTheDocument()
  })
})
