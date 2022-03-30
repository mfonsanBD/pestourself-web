import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import { LocationOn, CheckBox } from '@styled-icons/material-outlined'
import { User3 } from '@styled-icons/remix-line/User3'

import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column aria-label="platform-data">
        <Logo color="white" />
        <S.RowData>
          <LocationOn size={24} />
          <S.Info>
            <h3>10 Locais</h3>
            <p>No Rio de Janeiro</p>
          </S.Info>
        </S.RowData>

        <S.RowData>
          <User3 size={24} />
          <S.Info>
            <h3>50 Parceiros</h3>
            <p>Certificados e prontos para atender você</p>
          </S.Info>
        </S.RowData>

        <S.RowData>
          <CheckBox size={24} />
          <S.Info>
            <h3>20 Serviços Fechados</h3>
            <p>Serviços agendados na plataforma que foram concluídos.</p>
          </S.Info>
        </S.RowData>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="darkGray" size="small">
          Follow us
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="darkGray" size="small">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="location">
        <Heading color="darkGray" size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>
      <S.Div>
        <p>
          © Copyright {currentYear} - Pets Tour Self. Todos os Direitos
          Reservados.
        </p>
        <p>
          Desenvolvido por:{' '}
          <a href="mikedev.com.br" target="_blank">
            Mike Santos
          </a>
        </p>
      </S.Div>
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
