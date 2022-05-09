import Button from 'components/Button'
import { LocationMarker } from 'styled-icons/heroicons-solid'
import * as S from './styles'

export type LocationCardProps = {
  coverUrl: string
  coverAlt: string
  location: string
  slug: string
  total: number
}

const LocationCard = ({
  coverUrl,
  coverAlt,
  location,
  slug,
  total
}: LocationCardProps) => (
  <S.Wrapper>
    <img src={coverUrl} alt={coverAlt} />

    <S.Content>
      <S.LocationHeader>
        <LocationMarker size={24} />
        <S.TotalPartners>{total} Parceiros</S.TotalPartners>
      </S.LocationHeader>

      <S.LocationFooter>
        <S.LocationName>{location}</S.LocationName>
        <Button fullWidth as="a" href={`/locais/${slug}`}>
          Descubra
        </Button>
      </S.LocationFooter>
    </S.Content>
  </S.Wrapper>
)

export default LocationCard
