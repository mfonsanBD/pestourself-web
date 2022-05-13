import { render, screen } from 'utils/test-utils'

import Select from '.'

const props = {
  label: 'Super Categoria',
  name: 'fatherId',
  initialValue: 'Selecione uma super categoria',
  disabled: false,
  items: [
    { value: '1', label: 'Cão (até 10kg)' },
    { value: '2', label: 'Cão (até 25kg)' }
  ]
}

describe('<Select />', () => {
  it('should render the heading', () => {
    render(<Select {...props} />)

    expect(
      screen.getByRole(/selecione uma super categoria/i)
    ).toBeInTheDocument()
  })
})
