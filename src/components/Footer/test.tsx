import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    render(<Footer />)

    expect(
      screen.getByRole('heading', { name: /menu do site/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /sobre nós/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /junte-se a nós/i })
    ).toBeInTheDocument()
  })
})
