import { render, screen } from 'utils/test-utils'
import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verifiquem se tem 2 logos
    expect(screen.getAllByRole('img', { name: 'PetsTourSelf' })).toHaveLength(2)

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /Os maiores cuidadores de Pet em um só lugar/i
      })
    ).toBeInTheDocument()

    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /Pets Tour Self , a maior e mais completa plataforma para cuidadores/i
      })
    ).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
