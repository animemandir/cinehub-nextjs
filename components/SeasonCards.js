import Link from "next/link";

const SeasonCards = (props) => {
    const { seasonCards, tvDetail } = props
    console.log(tvDetail)
    return (
        <div className="season-cards flex flex-row flex-wrap justify-start">
        {seasonCards.map((season, index) => {
            {if (tvDetail.seasons.length == 1) {
                return (
                    <div key={index} className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
                    <div key={index} className="rounded-md overflow-hidden">
                        <Link key={index} href="/tv/[id]/season/[seasonid]" as={`/tv/${tvDetail.id}/season/${index+1}`}>
                        <a title={season.name}>
                        <img className="w-full hover:opacity-70" title={season.name} src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={season.name} width="1500px" height="2250px"/>
                        </a>
                        </Link>
                    </div>
                     </div> 
                )
            }
            else {
                return (
                    <div key={index} className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
                    <div key={index} className="rounded-md overflow-hidden">
                        <Link key={index} href="/tv/[id]/season/[seasonid]" as={`/tv/${tvDetail.id}/season/${index}`}>
                        <a title={season.name}>
                        <img className="w-full hover:opacity-70" title={season.name} src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={season.name} width="1500px" height="2250px"/>
                        </a>
                        </Link>
                    </div>
                     </div> 
                )
            }
        }
        })}
        </div>
     );
}
 
export default SeasonCards;