import Image from 'next/image'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Grid } from 'components/Grid'
import Button from 'components/Button'
import Select from 'components/Select'
import Heading from 'components/Heading'
import InfoCard from 'components/InfoCard'
import { CardProps } from 'components/Card'
import TextField from 'components/TextField'
import CardSlider from 'components/CardSlider'
import { FollowCardProps } from 'components/FollowCard'
import FollowCardSlider from 'components/FollowCardSlider'
import LocationCard, { LocationCardProps } from 'components/LocationCard'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'
import { FieldErrors } from 'utils/validations'

import * as S from './styles'
import { FileBadge } from 'styled-icons/octicons'
import { TwentyFourHours } from '@styled-icons/remix-fill'
import { DesktopComputer } from '@styled-icons/heroicons-outline'
import { Stethoscope } from '@styled-icons/remix-line/Stethoscope'
import {
  Schedule,
  AttachMoney,
  LocationSearching
} from '@styled-icons/material-outlined'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'

export type HomeProps = {
  topPartners: CardProps[]
  topAdvertiser: CardProps[]
  mostPartnersInThePlace: LocationCardProps[]
  partnersWithMostFollowers: FollowCardProps[]
}

const Home = ({
  topPartners,
  mostPartnersInThePlace,
  topAdvertiser,
  partnersWithMostFollowers
}: HomeProps) => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ location: '', pet: '', category: '' })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
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
              <S.FilterArea>
                <TextField
                  name="location"
                  type="text"
                  icon={<LocationSearching />}
                  iconPosition="right"
                  onInputChange={(v) => handleInput('location', v!)}
                  error={fieldError?.location}
                  placeholder="Em qual localização deseja encontar um self?"
                />
                <Select
                  name="whatIsYourPet"
                  initialValue="Qual é o seu pet?"
                  disabled={false}
                  onSelectChange={(v) => handleInput('pet', v!)}
                  items={[
                    { value: '1', label: 'Cão (até 10kg)' },
                    { value: '2', label: 'Cão (até 25kg)' }
                  ]}
                  error={fieldError?.pet}
                />
                <Select
                  name="chooseAnCategory"
                  initialValue="Escolha uma categoria"
                  disabled={false}
                  onSelectChange={(v) => handleInput('category', v!)}
                  items={[
                    { value: '1', label: 'Pet Sitter' },
                    { value: '2', label: 'Dog Walker' }
                  ]}
                  error={fieldError?.category}
                />
                <Button icon={<SearchOutline size={24} />}>Buscar</Button>
              </S.FilterArea>
            </TabPanel>
            <TabPanel>
              <S.FilterArea>
                <TextField
                  name="advertisers"
                  type="text"
                  iconPosition="right"
                  onInputChange={(v) => handleInput('advertisers', v!)}
                  error={fieldError?.advertisers}
                  placeholder="Em qual localização deseja encontar um anunciante?"
                />
                <Button>Buscar</Button>
              </S.FilterArea>
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

        <S.SectionComoFunciona>
          <Heading
            title="O que acontece na Pets Tour!"
            align="center"
            color="darkGray"
            backTitle="Como Funciona?"
            description="Essas são algumas das coisas que você consegue fazer em nossa plataforma"
            size="large"
          />
          <S.Infos>
            <InfoCard
              icon={<Schedule size={24} />}
              title="Agendamento"
              description="Seus clientes podem agendar seus serviços dentro da Pets Tour Self."
            />
            <InfoCard
              icon={<AttachMoney size={24} />}
              title="Recebimento"
              description="Acompanhe quanto você tem para receber no mês na sua área de parceiro."
            />
            <InfoCard
              icon={<DesktopComputer size={24} />}
              title="Customização"
              description="Deixe sua página com a sua cara e seus cliente ficarão encantados com ela."
            />
          </S.Infos>
        </S.SectionComoFunciona>

        <S.SectionFollowPartners>
          <Heading
            title="Siga os nossos parceiros"
            align="center"
            color="white"
            backTitle="Parceiros"
            size="large"
          />
          <FollowCardSlider items={partnersWithMostFollowers} />
        </S.SectionFollowPartners>

        <S.SectionComoFunciona>
          <Heading
            title="Na Pets Tour você pode confiar!"
            align="center"
            color="darkGray"
            backTitle="Segurança"
            size="large"
          />
          <S.Infos>
            <InfoCard
              icon={<TwentyFourHours size={24} />}
              title="Suporte 24/7"
              description="O nosso suporte é de 24 horas por dia e 7 dias por semana para os Clientes e Parceiros."
            />
            <InfoCard
              icon={<Stethoscope size={28} />}
              title="Seguro Emergencial"
              description="Temos a segurança de um seguro emergencial veterinário, que ajuda na saúdo do seu pet."
            />
            <InfoCard
              icon={<FileBadge size={24} />}
              title="Parceiros Certificados"
              description="Prezamos pela segurança do seu pet, por isso, só aceitamos parceiros com certificação."
            />
          </S.Infos>
        </S.SectionComoFunciona>
      </S.Main>
    </Base>
  )
}

export default Home
