import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'

const Wishlist = () => {
  return (
    <Base>
      <NextSeo title="Favoritos - Won Games" />
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
