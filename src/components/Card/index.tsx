import Link from 'next/link'

import FormatPrice from 'utils/formatPrice'

import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
import { LocationMarker } from '@styled-icons/heroicons-solid/LocationMarker'

import * as S from './styles'
import Ratings from 'components/Ratings'

export type CardProps = {
  id: string
  cover: string
  photo: string
  name: string
  slug: string
  shortDescription: string
  isAdvertiser?: boolean
  initialPrice?: number
  finalPrice?: number
  city: string
  state: string
  country: string
  categories: string[]
  rating: number
}

const Card = ({
  cover,
  photo,
  name,
  slug,
  shortDescription,
  isAdvertiser = false,
  initialPrice,
  finalPrice,
  city,
  state,
  country,
  categories,
  rating
}: CardProps) => {
  return (
    <S.Wrapper>
      <Link href={`/partner/${slug}`} passHref>
        <S.Cover>
          <Ratings rating={rating} />

          <S.ImageBox>
            <img src={cover} alt={name} />
          </S.ImageBox>

          <S.ProfilePhoto>
            <img src={photo} alt={name} />
          </S.ProfilePhoto>
        </S.Cover>
      </Link>

      <S.CardContent>
        <Link href={`/partner/${slug}`} passHref>
          <S.Name>{name}</S.Name>
        </Link>
        <S.Description>{shortDescription}</S.Description>
      </S.CardContent>

      {!isAdvertiser && (
        <S.PriceRange>
          <S.RangeTitle>Faixa de Preço</S.RangeTitle>
          <S.Prices>
            <span>{FormatPrice(initialPrice!)}</span>
            <ArrowRight size={24} />
            <span>{FormatPrice(finalPrice!)}</span>
          </S.Prices>
        </S.PriceRange>
      )}

      <S.LocationArea>
        <LocationMarker size={24} />
        <S.Location>
          {city}/{state} - {country}
        </S.Location>
      </S.LocationArea>

      <S.CardFooter>
        <S.Categories>{categories.join(', ')}</S.Categories>
      </S.CardFooter>
    </S.Wrapper>
  )
}

export default Card
