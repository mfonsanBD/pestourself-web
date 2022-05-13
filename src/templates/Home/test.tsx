import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import topPartners from 'components/CardSlider/partners'
import testimonials from 'components/TestimonialSlider/mock'
import topAdvertiser from 'components/CardSlider/advertiser'
import mostPartnersInThePlace from 'components/LocationCard/mock'
import partnersWithMostFollowers from 'components/FollowCardSlider/mock'

import Home from '.'

const props = {
  topPartners,
  mostPartnersInThePlace,
  topAdvertiser,
  partnersWithMostFollowers,
  testimonials
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Home />', () => {
  it('should render heading', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
  })
})
