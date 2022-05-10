import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'

export type MenuProps = {
  username?: string | null
  loading?: 'loading' | 'authenticated' | 'unauthenticated'
}

const Menu = ({ username, loading = 'unauthenticated' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { push } = useRouter()
  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <S.RightMenu>
        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <Link href="/quem-somos" passHref>
              <S.MenuLink>Quem Somos</S.MenuLink>
            </Link>
            <Link href="/vender-meus-servicos" passHref>
              <S.MenuLink>Vender Meus Serviços</S.MenuLink>
            </Link>
            <Link href="/anunciar" passHref>
              <S.MenuLink>Anunciar</S.MenuLink>
            </Link>
            <Link href="/noticias" passHref>
              <S.MenuLink>Noticias</S.MenuLink>
            </Link>
          </S.MenuNav>
        </MediaMatch>

        {loading !== 'loading' && (
          <>
            <S.MenuGroup>
              <MediaMatch greaterThan="medium">
                {!username ? (
                  <Link href="/sign-in" passHref>
                    <Button as="a">Entrar</Button>
                  </Link>
                ) : (
                  <UserDropdown username={username} />
                )}
              </MediaMatch>
            </S.MenuGroup>
          </>
        )}
      </S.RightMenu>

      {loading !== 'loading' && (
        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

          <S.MenuNav>
            <Link href="/quem-somos" passHref>
              <S.MenuLink>Quem Somos</S.MenuLink>
            </Link>
            <Link href="/vender-meus-servicos" passHref>
              <S.MenuLink>Vender Meus Serviços</S.MenuLink>
            </Link>
            <Link href="/anunciar" passHref>
              <S.MenuLink>Anunciar</S.MenuLink>
            </Link>
            <Link href="/noticias" passHref>
              <S.MenuLink>Noticias</S.MenuLink>
            </Link>

            {!!username && (
              <>
                <Link href="/profile/me" passHref>
                  <S.MenuLink>Minha Conta</S.MenuLink>
                </Link>
                <Link href="/wishlist" passHref>
                  <S.MenuLink>Favoritos</S.MenuLink>
                </Link>

                <S.MenuLink
                  role="button"
                  onClick={async () => {
                    const data = await signOut({
                      redirect: false,
                      callbackUrl: '/'
                    })
                    push(data.url)
                  }}
                  title="sign out"
                >
                  Sair
                </S.MenuLink>
              </>
            )}
          </S.MenuNav>

          {!username && (
            <S.RegisterBox>
              <Link href="/sign-in" passHref>
                <Button fullWidth size="large" as="a">
                  Entrar
                </Button>
              </Link>
              <span>ou</span>
              <Link href="/sign-up" passHref>
                <S.CreateAccount title="Crie sua conta">
                  Cadastre-se
                </S.CreateAccount>
              </Link>
            </S.RegisterBox>
          )}
        </S.MenuFull>
      )}
    </S.Wrapper>
  )
}

export default Menu
