import 'session.mock'
import { render, screen } from 'utils/test-utils'
import GameInfo from '.'

const props = {
  id: '1',
  title: 'My Game',
  description: 'My Game Description',
  price: 120
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    const { container } = render(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my game/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/my game description/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$120,00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /adicionar ao carrinho/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /adicionar aos favoritos/i })
    ).toBeInTheDocument()
  })
})
