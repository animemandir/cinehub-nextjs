import Link from "next/link";

const SeasonInfo = (props) => {
    const { SeasonDetail, tvID } = props
    console.log(SeasonDetail.episodes.length)
    const epArray = SeasonDetail.episodes
    return (
<div className="min-h-screen relative">
  <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${SeasonDetail.poster_path})`}} className="absolute brightness-[.20] w-full h-full bg-cover bg-no-repeat bg-center"></div>        
        <div className="relative season-details md:mx-24">
            <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row season-container">
                <div>
                    <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-gray-300">Season {SeasonDetail.season_number}</h2>
                    <div className="flex flex-wrap items-center text-gray-300 text-sm my-4">
                        <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"/></g></svg>
                        <span className="ml-1">{SeasonDetail.vote_average}</span>
                        <span className="mx-2">|</span>
                        <span>{SeasonDetail.air_date}</span>
                    </div>
        
                    <p className="text-gray-300 mt-8">
                        {SeasonDetail.overview}
                    </p>
            </div>
        </div>
        <div className="pt-2 pb-8">
              <iframe src={`https://www.2embed.ru/embed/tmdb/tv?id=${tvID}&s=${SeasonDetail.season_number}&e=1`} frameBorder={`0`} allowFullScreen={true} width={`100%`} height={`700px`}></iframe>
          </div>
          <div class="flex justify-center flex-wrap">
              {epArray.map((element, index) => {
                  return (
                    <li key={index} class="flex-row list-none my-8 pr-2">
                    <Link key={index} href="/tv/[tvid]/season/[seasondid]-[epid]" as={`/tv/${tvID}/season/${SeasonDetail.season_number}-${index+1}`}>
                    <a class="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">{index+1}</a>
                    </Link>
                </li>
                  )
              })}
        </div>
        </div>
        </div>
     );
}
 
export default SeasonInfo;