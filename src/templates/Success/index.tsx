import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import { Container } from 'components/Container'

import * as S from './styles'
import { Done } from '@styled-icons/material-outlined/Done'

const Success = () => {
  return (
    <Base>
      <NextSeo title={`Sucesso - ${SITE_NAME}`} />
      <Container>
        <S.Wrapper>
          <S.Heading>Compra realizada com sucesso!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Aguarde seus dados de pagamento por e-mail. Seu jogo já está
            disponível para download dentro da sua{' '}
            <Link href="/profile/orders">
              <a>Lista de Pedidos</a>
            </Link>
            . Aproveite!
          </S.Text>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Success
