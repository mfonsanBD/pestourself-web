import { NextSeo } from 'next-seo'

import Empty from 'components/Empty'

import Base from 'templates/Base'
import { SITE_NAME } from './_app'

export default function Index() {
  return (
    <Base>
      <NextSeo title={`Página Não Encontrada - ${SITE_NAME}`} />
      <Empty
        title="404: Página Não Encontrada"
        description="Ops...! esta página não existe. Volte para a loja e aproveite nossas ofertas."
        hasLink
      />
    </Base>
  )
}
