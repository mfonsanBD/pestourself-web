import Button from 'components/Button'
import { getDateFormat } from 'utils/formatDate'
import * as S from './styles'

export type FollowCardProps = {
  photoUrl: string
  name: string
  createdAt: string
  followers: number
  following: number
}

const FollowCard = ({
  photoUrl,
  name,
  createdAt,
  followers,
  following
}: FollowCardProps) => (
  <S.Wrapper>
    <S.UserInfo>
      <S.PhotoArea>
        <img src={photoUrl} alt={name} />
      </S.PhotoArea>
      <h3>{name}</h3>
      <small>Parceiro desde: {getDateFormat(createdAt)}</small>
    </S.UserInfo>
    <S.FollowArea>
      <small>
        <span>{followers}</span> Seguidores
      </small>
      <small>|</small>
      <small>
        <span>{following}</span> Seguindo
      </small>
    </S.FollowArea>
    <Button fullWidth>Seguir Agora</Button>
  </S.Wrapper>
)

export default FollowCard
