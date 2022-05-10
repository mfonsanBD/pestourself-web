import { render, screen } from '@testing-library/react'

import InfoCard from '.'

describe('<InfoCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<InfoCard />)

    expect(screen.getByRole('heading', { name: /InfoCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
