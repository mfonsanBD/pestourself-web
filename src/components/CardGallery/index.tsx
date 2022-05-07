import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined/Close'
import Slider, { SliderSettings } from 'components/Slider'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'
import { PhotoLibrary } from '@styled-icons/material/PhotoLibrary'
import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  slidesToShow: 1
}

export type CardGalleryImageProps = {
  src: string
  label: string
}

export type CardGalleryProps = {
  items: CardGalleryImageProps[]
}

const CardGallery = ({ items }: CardGalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <PhotoLibrary
        size={24}
        onClick={() => {
          setIsOpen(true)
        }}
      />

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={settings}>
            {items.map((item, index) => (
              <Image
                width={1024}
                height={600}
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label}
                objectFit="cover"
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default CardGallery
