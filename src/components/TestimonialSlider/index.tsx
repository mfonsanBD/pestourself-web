import Slider, { SliderSettings } from 'components/Slider'
import Testimonial, { TestimonialProps } from 'components/Testimonial'

import * as S from './styles'

type ArrowsProps = React.HTMLAttributes<HTMLDivElement>

const ArrowRight = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src="/img/arrow-right.svg" aria-label="next match" />
    </div>
  )
}

const ArrowLeft = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src="/img/arrow-left.svg" aria-label="previous match" />
    </div>
  )
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />
}

export type TestimonialSliderProps = {
  items: TestimonialProps[]
}

const TestimonialSlider = ({ items }: TestimonialSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Testimonial key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default TestimonialSlider
