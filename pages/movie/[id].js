import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MovieInfo from '../../components/MovieInfo'
import Script from 'next/script'
import Head from 'next/head'

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const { id } = query
    const apiKey = process.env.API_KEY
    let genreArr = []
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    const data = await res.json()
    data.genres.map(element => {
        genreArr.push(element.name)
    })
    if (res.ok) {
        return {
            props: { MovieDetail: data, genreArr }
        }
    }
  }
  
  export default function MovieDetail({ MovieDetail, genreArr }) {
    return (
      <div className="popular-movies bg-zinc-900">
        <Head>
          <title>{MovieDetail.title} ({MovieDetail.release_date.substr(0,4)}) - Cinehub.wtf</title>
        </Head>
        <Script src="https://arc.io/widget.min.js#d9siwAFU" />
        <Header />
        <MovieInfo MovieDetail={MovieDetail} genreArr={genreArr}/>
        <Footer />
      </div>
    )
  }