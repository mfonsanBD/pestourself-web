import { GetServerSidePropsContext } from 'next'

import Wishlist from 'templates/Wishlist'

import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export default function Index() {
  return <Wishlist />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string
    }
  })
  return {
    props: {
      session,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
