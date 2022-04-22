import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvInfo from '../../components/TvInfo'
import Script from 'next/script'
import Head from 'next/head'

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
        <Head>
          <title>{tvDetail.name} ({tvDetail.first_air_date.substr(0,4)}) - Cinehub.wtf</title>
        </Head>        
        <Script src="https://arc.io/widget.min.js#d9siwAFU" />
        <Header />
        <TvInfo tvDetail={tvDetail} genreArr={genreArr}/>
        <Footer />
      </div>
    )
  }