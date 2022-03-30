import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo color="white" />
          </a>
        </Link>

        <div>
          <Heading size="huge" color="white">
            Os maiores cuidadores de Pet em um só lugar
          </Heading>
          <S.Subtitle>
            <strong>Pets Tour Self</strong>, a maior e mais completa plataforma
            para cuidadores.
          </S.Subtitle>
        </div>

        <S.Footer>
          © Copyright {currentYear} - Pets Tour Self. Todos os Direitos
          Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <S.LogoBox>
          <Link href="/">
            <a>
              <Logo color="darkGray" />
            </a>
          </Link>
        </S.LogoBox>

        <Heading color="darkGray">{title}</Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
