import Header from '../../../../../components/Header'
import Footer from '../../../../../components/Footer'
import SeasonInfo from '../../../../../components/SeasonInfo'
import Script from 'next/script'
import Head from 'next/head'

export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const { id, seasonid } = query
    const apiKey = process.env.API_KEY
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonid}?api_key=${apiKey}&language=en-US`
    )
    const data = await res.json()
    if (res.ok) {
        return {
            props: { SeasonDetail: data, id }
        }
    }
  }
  
  export default function SeasonDetail({ SeasonDetail, id}) {
    return (
      <div className="popular-movies bg-zinc-900">
        <Head>
          <title>Season {SeasonDetail.season_number} ({SeasonDetail.air_date.substr(0,4)}) - Cinehub.wtf</title>
        </Head>         
        <Script src="https://arc.io/widget.min.js#d9siwAFU" />
        <Header />
        <SeasonInfo SeasonDetail={SeasonDetail} tvID={id}/>
        <Footer />
      </div>
    )
  }