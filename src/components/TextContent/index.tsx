import Heading from 'components/Heading'
import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && <Heading title={title} color="darkGray" />}

    <section dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
