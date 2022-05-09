import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { CardProps } from 'components/Card'
import CardSlider from 'components/CardSlider'
import LocationCard, { LocationCardProps } from 'components/LocationCard'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

export type HomeProps = {
  topPartners: CardProps[]
  topAdvertiser: CardProps[]
  mostPartnersInThePlace: LocationCardProps[]
}

const Home = ({
  topPartners,
  mostPartnersInThePlace,
  topAdvertiser
}: HomeProps) => (
  <Base>
    <NextSeo
      title={`Página Inicial - ${SITE_NAME}`}
      description="Os maiores cuidadores de Pet em um só lugar. Pets Tour Self, a maior e mais completa plataforma para cuidadores."
      canonical={process.env.NEXTAUTH_URL}
      openGraph={{
        url: `${process.env.NEXTAUTH_URL}`,
        title: `Página Inicial - ${SITE_NAME}`,
        description:
          'Os maiores cuidadores de Pet em um só lugar. Pets Tour Self, a maior e mais completa plataforma para cuidadores.'
      }}
    />

    <S.Cover>
      <Image src="/img/hero-bg.jpg" alt="cachorros passeando" layout="fill" />
      <S.Filters>
        <Tabs>
          <TabList>
            <Tab>Buscar um Self</Tab>
            <Tab>Buscar Anunciante</Tab>
          </TabList>

          <TabPanel>
            <h2>Campos de Busca de Parceiros</h2>
          </TabPanel>
          <TabPanel>
            <h2>Campo de Busca Anunciante</h2>
          </TabPanel>
        </Tabs>
      </S.Filters>
    </S.Cover>

    <S.Main>
      <S.SectionParceiros>
        <Heading
          title="Parceiros em Destaque"
          align="center"
          color="darkGray"
          backTitle="Escolha os Melhores"
          description="Esses são os parceiros com melhor avaliação em nossa plataforma"
          size="large"
        />
        <CardSlider items={topPartners} />
      </S.SectionParceiros>

      <S.SectionLocais>
        <Heading
          title="Os Locais com mais Parceiros"
          align="center"
          color="darkGray"
          backTitle="Onde Encontrar?"
          description="Locais que tem mais parceiros disponíveis para te atender"
          size="large"
        />
        <Grid>
          {mostPartnersInThePlace.map((place) => (
            <LocationCard key={place.slug} {...place} />
          ))}
        </Grid>
      </S.SectionLocais>

      <S.SectionAnunciantes>
        <Heading
          title="Veja os Anunciantes em Destaque"
          align="center"
          color="darkGray"
          backTitle="Anunciantes"
          size="large"
        />
        <CardSlider items={topAdvertiser} />
      </S.SectionAnunciantes>
    </S.Main>
  </Base>
)

export default Home
