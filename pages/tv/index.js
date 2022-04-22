import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvDisplay from '../../components/TvDisplay'
import Script from 'next/script'
import Head from 'next/head'

export async function getServerSideProps() {
  // Fetch data from external API
  const apiKey = process.env.API_KEY
  const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
  )
  const data = await res.json()
  if (res.ok) {
      return {
          props: { popularTV: data.results }
      }
  }
}

export default function tvHome({ popularTV }) {

  return (
    <div className="popular-tv bg-zinc-900">
      <Head>
        <title>TV - Cinehub.wtf</title>
      </Head>      
      <Script src="https://arc.io/widget.min.js#d9siwAFU" />
      <Header />
      <TvDisplay tv={popularTV}/>
      <Footer />
    </div>
  )
}
