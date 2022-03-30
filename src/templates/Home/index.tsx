import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Base from 'templates/Base'

import * as S from './styles'

const Home = () => (
  <Base>
    <NextSeo
      title="Home - Won Games"
      description="All your favorite games in one place. WON is the best and most complete gaming platform."
      canonical={`https://won-games-self.vercel.app`}
      openGraph={{
        url: `https://won-games-self.vercel.app`,
        title: 'Home - Won Games',
        description:
          'All your favorite games in one place. WON is the best and most complete gaming platform.'
      }}
    />

    <S.Cover>
      <Image
        src="/img/hero-bg.jpg"
        alt="Homem sentado com o notebook estudando"
        layout="fill"
      />
    </S.Cover>

    <h1 style={{ color: 'red' }}>Home</h1>
  </Base>
)

export default Home
