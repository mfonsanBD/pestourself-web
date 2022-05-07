import * as S from './styles'

export type HeadingProps = {
  title: string
  backTitle?: string
  description?: string
  color?: 'white' | 'darkGray'
  size?: 'small' | 'medium' | 'large'
  align?: 'center' | 'left'
}

const Heading = ({
  title,
  color = 'white',
  size = 'medium',
  align = 'center',
  backTitle,
  description
}: HeadingProps) => (
  <S.Wrapper color={color} size={size} backTitle={backTitle} align={align}>
    <h2>{title}</h2>
    {!!description && <p>{description}</p>}
  </S.Wrapper>
)

export default Heading
