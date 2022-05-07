import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading title="Pets Tour Self" />)
    expect(
      screen.getByRole('heading', { name: /Pets Tour Self/i })
    ).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="darkGray" title="Pets Tour Self" />)
    expect(
      screen.getByRole('heading', { name: /Pets Tour Self/i })
    ).toHaveStyle({
      color: '#212121'
    })
  })
})
