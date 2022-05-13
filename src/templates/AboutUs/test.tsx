import { render, screen } from 'utils/test-utils'

import AboutUs from '.'

describe('<AboutUs />', () => {
  it('should render the heading', () => {
    render(<AboutUs />)

    expect(
      screen.getByRole('heading', { name: /Saiba um pouco sobre nós/i })
    ).toBeInTheDocument()
  })
})
