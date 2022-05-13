import { useSession } from 'next-auth/react'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  color?: 'white' | 'primary'
}

const Base = ({ children, color = 'primary' }: BaseTemplateProps) => {
  const { data: session, status: loading } = useSession()
  return (
    <S.Wrapper>
      <S.SectionMenu color={color}>
        <Menu color={color} username={session?.user?.name} loading={loading} />
      </S.SectionMenu>

      {children}

      <S.SectionFooter>
        <Footer />
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
