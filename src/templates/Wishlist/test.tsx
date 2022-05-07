import { WishlistContextDefaultValues } from 'hooks/use-wishlist'
import 'session.mock'
import { render, screen } from 'utils/test-utils'
import Wishlist from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues
      // items: [gamesMock[0]]
    }
    render(<Wishlist />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', { name: 'Favoritos' })
    ).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues
      // items: []
    }
    render(<Wishlist />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', {
        name: /Sua lista de favoritos está vazia/i
      })
    ).toBeInTheDocument()
  })
})
