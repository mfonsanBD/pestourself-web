import { render, screen } from 'utils/test-utils'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render the heading', () => {
    render(<NotFound />)

    expect(
      screen.getByRole('heading', { name: /Página Não Encontrada/i })
    ).toBeInTheDocument()
  })
})
