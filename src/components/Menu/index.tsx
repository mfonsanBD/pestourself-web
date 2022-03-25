import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Search as SearchIcon } from '@styled-icons/remix-line/Search'
import Button from 'components/Button'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
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

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Inicio</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Jogos</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Search" />
            </S.IconWrapper>
            <S.IconWrapper>
              <MediaMatch greaterThan="medium">
                <CartDropdown />
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Link href="/cart">
                  <a>
                    <CartIcon />
                  </a>
                </Link>
              </MediaMatch>
            </S.IconWrapper>

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

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />

            <S.MenuNav>
              <Link href="/" passHref>
                <S.MenuLink>Inicio</S.MenuLink>
              </Link>
              <Link href="/games" passHref>
                <S.MenuLink>Jogos</S.MenuLink>
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
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
