import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import TvDisplay from '../../../../components/TvDisplay'
import Script from 'next/script'

export async function getServerSideProps({ query }) {
    const { pageid } = query
  // Fetch data from external API
  const apiKey = process.env.API_KEY
  const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${pageid}`
  )
  const data = await res.json()
  if (res.ok) {
      return {
          props: { PopulartvPage: data.results, pageid }
      }
  }
}

export default function PopulartvPage({ PopulartvPage, pageid }) {

  return (
    <div className="popular-tv bg-zinc-900">
      <Script src="https://arc.io/widget.min.js#d9siwAFU" />
      <Header />
      <TvDisplay tv={PopulartvPage} pageid={pageid}/>
      <Footer />
    </div>
  )
}
