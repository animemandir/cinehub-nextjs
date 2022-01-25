import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import MovieDisplay from '../../../../components/MovieDisplay'

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
          props: { PopularPage: data.results }
      }
  }
}

export default function PopularPage({ PopularPage }) {

  return (
    <div className="popular-movies bg-zinc-900">
      <Header />
      <MovieDisplay movie={PopularPage}/>
      <Footer />
    </div>
  )
}
