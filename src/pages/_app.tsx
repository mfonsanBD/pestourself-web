import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import { Provider as AuthProvider } from 'next-auth/client'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

import { useApollo } from 'utils/apollo'

import { WishlistProvider } from 'hooks/use-wishlist'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <WishlistProvider>
            <Head>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#FEAE11" />
              <meta
                name="description"
                content="Os maiores cuidadores de Pet em um só lugar. Pets Tour Self, a maior e mais completa plataforma para cuidadores."
              />
            </Head>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <NextNprogress
              color={theme.colors.primary}
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </WishlistProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
