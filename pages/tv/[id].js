import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvInfo from '../../components/TvInfo'

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const { id } = query
    const apiKey = process.env.API_KEY
    let genreArr = []
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
    )
    const data = await res.json()
    data.genres.map(element => {
        genreArr.push(element.name)
    })
    if (res.ok) {
        return {
            props: { tvDetail: data, genreArr }
        }
    }
  }
  
  export default function tvDetail({ tvDetail, genreArr }) {
    return (
      <div className="popular-movies bg-zinc-900">
        <Header />
        <TvInfo tvDetail={tvDetail} genreArr={genreArr}/>
      </div>
    )
  }