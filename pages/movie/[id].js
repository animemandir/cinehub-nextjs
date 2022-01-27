import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MovieInfo from '../../components/MovieInfo'

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
        <Header />
        <MovieInfo MovieDetail={MovieDetail} genreArr={genreArr}/>
        {/* <Footer /> */}
      </div>
    )
  }