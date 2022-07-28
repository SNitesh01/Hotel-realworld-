import '../styles/globals.css'
import { getSession } from 'next-auth/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps, session }: any) {
  return (
    <Layout session={session}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp