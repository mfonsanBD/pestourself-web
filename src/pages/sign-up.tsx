import { NextSeo } from 'next-seo'

import FormSignUp from 'components/FormSignUp'

import Auth from 'templates/Auth'
import { SITE_NAME } from './_app'

export default function SignUp() {
  return (
    <Auth title="Cadastro">
      <NextSeo
        title={`Cadastro - ${SITE_NAME}`}
        description="Cadastre-se em nossa plataforma e conheça um Self para cuidar do seu pet."
        canonical={process.env.NEXTAUTH_URL}
        openGraph={{
          url: process.env.NEXTAUTH_URL,
          title: `Cadastro - ${SITE_NAME}`,
          description:
            'Cadastre-se em nossa plataforma e conheça um Self para cuidar do seu pet.'
        }}
      />
      <FormSignUp />
    </Auth>
  )
}
