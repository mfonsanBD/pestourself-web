import { NextSeo } from 'next-seo'

import Empty from 'components/Empty'
import Heading from 'components/Heading'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

const Wishlist = () => {
  return (
    <Base>
      <NextSeo title={`Favoritos - ${SITE_NAME}`} />
      <Container>
        <Heading title="Favoritos" size="small" />

        <Empty
          title="Sua lista de favoritos está vazia"
          description="Adicione jogos a sua lista de favoritos e eles aparecerão aqui."
          hasLink
        />

        <Divider />
      </Container>
    </Base>
  )
}

export default Wishlist
