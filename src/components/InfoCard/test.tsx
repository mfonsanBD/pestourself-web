import { TwentyFourHours } from '@styled-icons/remix-fill'
import { render, screen } from '@testing-library/react'

import InfoCard from '.'

const props = {
  icon: <TwentyFourHours size={24} />,
  title: 'Suporte 24/7',
  description:
    'O nosso suporte é de 24 horas por dia e 7 dias por semana para os Clientes, Profissionais e Parceiros.'
}

describe('<InfoCard />', () => {
  it('should render the heading', () => {
    render(<InfoCard {...props} />)

    expect(screen.getByText(/Suporte 24\/7/i)).toBeInTheDocument()
  })
})
