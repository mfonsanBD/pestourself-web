import Link from 'next/link'
import { useState } from 'react'
import { FieldErrors } from 'utils/validations'

import Logo from 'components/Logo'
import TextField from 'components/TextField'

import { LocationOn, CheckBox, Email } from '@styled-icons/material-outlined'
import { User3 } from '@styled-icons/remix-line/User3'

import * as S from './styles'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [value, setValue] = useState({ email: '' })

  const handleInput = (field: string, value: string) => {
    setValue((s) => ({ ...s, [field]: value }))
  }

  const handleNewslatter = async (event: React.FormEvent) => {
    event.preventDefault()
    setFieldError(value)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Column aria-label="platform-data">
          <Logo color="white" />
          <S.Separator>
            <S.RowData>
              <LocationOn size={24} />
              <S.Info>
                <h3>10 Locais</h3>
                <p>No Rio de Janeiro</p>
              </S.Info>
            </S.RowData>

            <S.RowData>
              <User3 size={24} />
              <S.Info>
                <h3>50 Parceiros</h3>
                <p>Certificados e prontos para atender você</p>
              </S.Info>
            </S.RowData>

            <S.RowData>
              <CheckBox size={24} />
              <S.Info>
                <h3>20 Serviços Fechados</h3>
                <p>Serviços agendados na plataforma que foram concluídos.</p>
              </S.Info>
            </S.RowData>
          </S.Separator>
        </S.Column>

        <S.Column aria-labelledby="site-menu">
          <S.FooterTitle>Menu do Site</S.FooterTitle>

          <nav id="site-menu">
            <Link href="/buscar">
              <a>Encontre um Parceiro</a>
            </Link>
            <Link href="/vender-meus-servicos">
              <a>Vender Meus Serviços</a>
            </Link>
            <Link href="/anunciar">
              <a>Anunciar</a>
            </Link>
            <Link href="/ajuda">
              <a>Central de Ajuda</a>
            </Link>
            <Link href="/politica-de-privacidade">
              <a>Política de Privacidade</a>
            </Link>
            <Link href="/termos-de-uso">
              <a>Termos de Uso</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="about-us">
          <S.FooterTitle>Sobre Nós</S.FooterTitle>

          <nav id="about-us">
            <Link href="/quem-somos" passHref>
              <a>Quem Somos</a>
            </Link>
            <Link href="/noticias" passHref>
              <a>Notícias</a>
            </Link>
            <Link href="https://upcy.petstour.com.br" passHref>
              <a target="_blank">Visite Nossa Loja</a>
            </Link>
            <Link href="https://petstour.com.br" passHref>
              <a target="_blank">Visite Nosso Site</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-label="follow-us">
          <S.FooterTitle>Junte-se a nós!</S.FooterTitle>

          <span>Não enviamos spam, não se preocupe!</span>
          <TextField
            name="email"
            placeholder="Digite aqui seu e-mail..."
            type="email"
            value={value.email}
            onInputChange={(v) => handleInput('email', v!)}
            icon={<Email />}
            error={fieldError?.email}
          />
          <S.UseTermsArea>
            <Checkbox />
            <span>
              Eu concordo com os{' '}
              <Link href="/termos-de-uso" passHref>
                <a>Termos de Uso</a>
              </Link>
              .
            </span>
          </S.UseTermsArea>
          <Button
            fullWidth
            disabled={value.email === '' && fieldError ? true : false}
            onClick={handleNewslatter}
          >
            Enviar
          </Button>
        </S.Column>
      </S.Content>

      <S.Copyright>
        <S.Div>
          <p>
            © Copyright {currentYear} - Pets Tour Self. Todos os Direitos
            Reservados.
          </p>
          <p>
            Desenvolvido por:{' '}
            <a href="https://mikedev.com.br" target="_blank" rel="noreferrer">
              Mike Santos
            </a>
          </p>
        </S.Div>
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
