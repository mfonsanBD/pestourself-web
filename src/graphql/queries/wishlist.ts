import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GamesFragment } from 'graphql/fragments/game'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        ...GamesFragment
      }
    }
  }

  ${GamesFragment}
`

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlist, QueryWishlistVariables>
) {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options
  )
}
