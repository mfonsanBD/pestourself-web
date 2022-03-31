import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const SITE_NAME = 'Pets Tour Self'

import Base from 'templates/Base'

import * as S from './styles'
import { Container } from 'components/Container'

const Home = () => (
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
        <Container>Conteúdo da Página Inicial</Container>
      </S.SectionParceiros>
    </S.Main>
  </Base>
)

export default Home
