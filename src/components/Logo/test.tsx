import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label default', () => {
    render(<Logo />)

    const logo = screen.getByLabelText(/PetsTourSelf/i)

    expect(logo).toHaveStyle({
      fill: '#FFFFFF'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="darkGray" />)

    const logo = screen.getByLabelText(/PetsTourSelf/i)

    expect(logo).toHaveStyle({
      fill: '#212121'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/PetsTourSelf/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/PetsTourSelf/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
