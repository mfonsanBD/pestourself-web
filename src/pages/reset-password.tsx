import { NextSeo } from 'next-seo'

import Auth from 'templates/Auth'
import { SITE_NAME } from './_app'

import FormResetPassword from 'components/FormResetPassword'

export default function ResetPassword() {
  return (
    <Auth title="Resetar sua Senha">
      <NextSeo title={`Resetar Senha - ${SITE_NAME}`} />
      <FormResetPassword />
    </Auth>
  )
}
