import { NextSeo } from 'next-seo'

import Base from 'templates/Base'

import { SITE_NAME } from 'pages/_app'

import * as S from './styles'
import Heading from 'components/Heading'
import InfoCard from 'components/InfoCard'
import { Stethoscope, TwentyFourHours } from '@styled-icons/remix-fill'
import { FileBadge } from 'styled-icons/octicons'
import { Rocket, DonateHeart } from '@styled-icons/boxicons-regular'
import { Eye } from '@styled-icons/ionicons-outline/Eye'
import Link from 'next/link'

const AboutUs = () => (
  <Base color="white">
    <NextSeo
      title={`Quem Somos - ${SITE_NAME}`}
      description="Conheça a nossa história e os nossos valores e saiba quem somos."
      canonical={process.env.NEXTAUTH_URL}
      openGraph={{
        url: `${process.env.NEXTAUTH_URL}`,
        title: `Quem Somos - ${SITE_NAME}`,
        description:
          'Conheça a nossa história e os nossos valores e saiba quem somos.'
      }}
    />

    <S.Main>
      <S.SectionYouKnow>
        <Heading
          title="Saiba um pouco sobre nós"
          align="center"
          color="darkGray"
          backTitle="Quem Somos"
          size="large"
        />
        <S.YouKnowArea>
          <S.ImageBox>
            <img
              src="/img/you-know-bg.jpg"
              alt="Mulher com um cachorro no colo"
            />
          </S.ImageBox>
          <S.YouKnowTextArea>
            <h2>Você Sabia?</h2>
            <br />
            <p>
              Que toda vez que você contrata um serviço em nossa plataforma você
              está contribuindo para o crescimento de um profissional autônomo
              (Self) que tem certificado(s) e que presta um serviço de
              excelência.
              <br />
              <br />
              E que os valores destinados para a nossa plataforma são separados
              para contribuir com a ONG ... que tem o intuito de ...
              <br />
              <br />
              Entre no site abaixo para saber mais sobre a ONG:
              <br />
              <Link href="" passHref>
                <a target="_blank">www.nomedaong.com.br</a>
              </Link>
            </p>
          </S.YouKnowTextArea>
        </S.YouKnowArea>
      </S.SectionYouKnow>

      <S.SectionValues>
        <Heading
          title="Esperamos que você se identifique com a gente"
          align="center"
          color="white"
          backTitle="Nossa Identidade"
          size="large"
        />
        <S.Infos>
          <InfoCard
            icon={<Rocket size={24} />}
            title="Missão"
            description="O nosso suporte é de 24 horas por dia e 7 dias por semana para os Clientes e Parceiros."
          />
          <InfoCard
            icon={<Eye size={24} />}
            title="Visão"
            description="Temos a segurança de um seguro emergencial veterinário, que ajuda na saúdo do seu pet."
          />
          <InfoCard
            icon={<DonateHeart size={24} />}
            title="Valores"
            description="Prezamos pela segurança do seu pet, por isso, só aceitamos parceiros com certificação."
          />
        </S.Infos>
      </S.SectionValues>

      <S.SectionAboutUs>
        <Heading
          title="Sobre Nós"
          align="center"
          color="darkGray"
          size="large"
        />
        <S.AboutArea>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </S.AboutArea>
      </S.SectionAboutUs>

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

export default AboutUs
