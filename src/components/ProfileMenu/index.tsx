import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link title="Meu Perfil" isActive={activeLink === '/profile/me'}>
          <AccountCircle size={24} />
          <span>Meu Perfil</span>
        </S.Link>
      </Link>
      <Link href="/profile/orders" passHref>
        <S.Link
          title="Meus Pedidos"
          isActive={activeLink === '/profile/orders'}
        >
          <FormatListBulleted size={24} />
          <span>Meus Pedidos</span>
        </S.Link>
      </Link>
      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
        title="Sair"
      >
        <ExitToApp size={24} />
        <span>Sair</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
