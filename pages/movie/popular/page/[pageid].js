import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import MovieDisplay from '../../../../components/MovieDisplay'
import Script from 'next/script'

export async function getServerSideProps({ query }) {
  const { pageid } = query
  // Fetch data from external API
  const apiKey = process.env.API_KEY
  const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageid}`
  )
  const data = await res.json()
  if (res.ok) {
      return {
          props: { PopularPage: data.results, pageid }
      }
  }
}

export default function PopularPage({ PopularPage, pageid }) {

  return (
    <div className="popular-movies bg-zinc-900">
      <Script src="https://arc.io/widget.min.js#d9siwAFU" />
      <Header />
      <MovieDisplay movie={PopularPage} pageid={pageid}/>
      <Footer />
    </div>
  )
}
