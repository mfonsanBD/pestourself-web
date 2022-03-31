import { NextSeo } from 'next-seo'

import Auth from 'templates/Auth'

import FormResetPassword from 'components/FormResetPassword'

export default function ResetPassword() {
  return (
    <Auth title="Resetar sua Senha">
      <NextSeo title="Resetar Senha - Won Games" />
      <FormResetPassword />
    </Auth>
  )
}
