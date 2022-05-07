import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Home from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Home />', () => {
  it('should render heading', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /campos de Busca de parceiros/i })
    ).toBeInTheDocument()
  })
})
