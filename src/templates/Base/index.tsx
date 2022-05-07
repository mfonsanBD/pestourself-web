import { useSession } from 'next-auth/react'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { data: session, status: loading } = useSession()
  return (
    <S.Wrapper>
      <S.SectionMenu>
        <Menu username={session?.user?.name} loading={loading} />
      </S.SectionMenu>

      {children}

      <S.SectionFooter>
        <Footer />
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
