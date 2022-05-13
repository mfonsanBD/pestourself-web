// import { initializeApollo } from 'utils/apollo'

import topPartners from 'components/CardSlider/partners'
import topAdvertiser from 'components/CardSlider/advertiser'
import mostPartnersInThePlace from 'components/LocationCard/mock'
import partnersWithMostFollowers from 'components/FollowCardSlider/mock'

import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  // const apolloCliente = initializeApollo()

  return {
    revalidate: 10,
    props: {
      topPartners,
      mostPartnersInThePlace,
      topAdvertiser,
      partnersWithMostFollowers
    }
  }
}
