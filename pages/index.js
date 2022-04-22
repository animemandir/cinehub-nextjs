import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieDisplay from '../components/MovieDisplay'
import Script from 'next/script'
import Head from 'next/head'

export async function getServerSideProps() {
  // Fetch data from external API
  const apiKey = process.env.API_KEY
  const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  )
  const data = await res.json()
  if (res.ok) {
      return {
          props: { popularMovies: data.results }
      }
  }
}

export default function Home({ popularMovies }) {  
  return (
    <div className="popular-movies bg-zinc-900">
      <Head>
        <title>Movies - Cinehub.wtf</title>
      </Head>
      <Script src="https://arc.io/widget.min.js#d9siwAFU" />
      <Header />
      <MovieDisplay movie={popularMovies}/>
      <Footer />
    </div>
  )
}
