import '../styles/globals.css'
import '../styles/general.sass'
import Layout from '../src/Components/layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
