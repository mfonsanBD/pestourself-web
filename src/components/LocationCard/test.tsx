import { render, screen } from '@testing-library/react'

import LocationCard from '.'

const props = {
  coverUrl: '/img/location.png',
  coverAlt: 'Cristo Redentor - RJ',
  location: 'Rio de Janeiro',
  slug: 'rio-de-janeiro',
  total: 6
}

describe('<LocationCard />', () => {
  it('should render the heading', () => {
    render(<LocationCard {...props} />)

    expect(screen.getByText(/Rio de Janeiro/i)).toBeInTheDocument()
  })
})
