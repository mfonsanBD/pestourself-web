import { NextSeo } from 'next-seo'

import FormSignIn from 'components/FormSignIn'

import Auth from 'templates/Auth'
import { SITE_NAME } from 'templates/Home'

export default function SignIn() {
  return (
    <Auth title="Entrar">
      <NextSeo
        title={`Entrar - ${SITE_NAME}`}
        description="Entre em sua conta e aproveite nossa plataforma."
        canonical={process.env.NEXTAUTH_URL}
        openGraph={{
          url: process.env.NEXTAUTH_URL,
          title: `Entrar - ${SITE_NAME}`,
          description: 'Entre em sua conta e aproveite nossa plataforma.'
        }}
      />
      <FormSignIn />
    </Auth>
  )
}
