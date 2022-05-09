import { render, screen } from '@testing-library/react'

import CardSlider from '.'
import mock from './partners'

const props = {
  items: mock
}

describe('<CardSlider />', () => {
  it('should render the heading', () => {
    render(<CardSlider {...props} />)

    expect(screen.getByText(/Faixa de Preço/i)).toBeInTheDocument()
  })
})
