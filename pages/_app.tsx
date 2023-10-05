import type { AppProps } from 'next/app'
import { GlobalStyles } from '@/components/styles/GlobalStyles'
import Layout from '@/components/Layout';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Matt Hernandez</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;