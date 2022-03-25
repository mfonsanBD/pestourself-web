import GamesTemplate, { GamesTemplateProps } from 'templates/GamesTemplate'

import { initializeApollo } from 'utils/apollo'
import { parseQueryStringToWhere } from 'utils/filter/index'

import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

import {
  genreFields,
  platformFields,
  priceFields,
  sortFields
} from 'utils/filter/fields'
import { GetServerSidePropsContext } from 'next'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Preço',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterPlatforms = {
    title: 'Sistema',
    name: 'platforms',
    type: 'checkbox',
    fields: platformFields
  }

  const filterSort = {
    title: 'Ordenar por',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Gêneros',
    name: 'categories',
    type: 'checkbox',
    fields: genreFields
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories
  ]

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
