import { getDateFormat } from 'utils/formatDate'

import * as S from './styles'
import { QuoteRight } from '@styled-icons/boxicons-solid/QuoteRight'

export type TestimonialProps = {
  message: string
  img: string
  name: string
  userSince: string
}

const Testimonial = ({ message, img, name, userSince }: TestimonialProps) => (
  <S.Wrapper>
    <S.MessageBox>
      <QuoteRight size={100} />
      <S.Message>{message}</S.Message>
    </S.MessageBox>
    <S.ClientInfo>
      <S.ClientPhoto>
        <img src={img} alt={name} />
      </S.ClientPhoto>
      <S.ClientData>
        <h3>{name}</h3>
        <small>Parceiro desde: {getDateFormat(userSince)}</small>
      </S.ClientData>
    </S.ClientInfo>
  </S.Wrapper>
)

export default Testimonial
