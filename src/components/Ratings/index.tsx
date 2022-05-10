import * as S from './styles'

export type RatingsProps = {
  rating: number
}

const Ratings = ({ rating }: RatingsProps) => {
  return (
    <S.Wrapper>
      <S.NumberRating rating={rating}>{rating}</S.NumberRating>
      <S.TotalAndMessage rating={rating}>
        <span>/5</span>
        <small>
          {rating > 0 && rating <= 1
            ? 'Horrivel'
            : rating > 1 && rating <= 2
            ? 'Ruim'
            : rating > 2 && rating <= 3
            ? 'Normal'
            : rating > 3 && rating <= 4
            ? 'Bom'
            : rating > 4 && rating <= 4.8
            ? 'Muito Bom'
            : rating > 4.8 && 'Excelente'}
        </small>
      </S.TotalAndMessage>
    </S.Wrapper>
  )
}

export default Ratings
