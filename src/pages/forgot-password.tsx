import { NextSeo } from 'next-seo'

import Auth from 'templates/Auth'

import FormForgotPassword from 'components/FormForgotPassword'

export default function ForgotPassword() {
  return (
    <Auth title="Pedir Nova Senha">
      <NextSeo title="Esqueci minha senha - Won Games" />
      <FormForgotPassword />
    </Auth>
  )
}
