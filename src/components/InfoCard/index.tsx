import * as S from './styles'

export type InfoCardProps = {
  icon: JSX.Element
  title: string
  description: string
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => (
  <S.Wrapper>
    <S.IconBox>{icon}</S.IconBox>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default InfoCard
