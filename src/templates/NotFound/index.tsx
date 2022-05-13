import Empty from 'components/Empty'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import Base from 'templates/Base'

import * as S from './styles'

const NotFound = () => (
  <Base color="white">
    <NextSeo title={`Página Não Encontrada - ${SITE_NAME}`} />
    <S.Main>
      <Empty
        title="Página Não Encontrada"
        description="Ops...! esta página não existe. Volte para a página inicial e encontre um Self."
        hasLink
      />
    </S.Main>
  </Base>
)

export default NotFound
