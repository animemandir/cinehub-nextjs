import Link from "next/link";

const SeasonInfo = (props) => {
    const { SeasonDetail, tvID } = props
    console.log(SeasonDetail)
    const epArray = SeasonDetail.episodes
    return (       
        <div className="text-center min-h-screen season-details md:mx-24">
            <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row season-container place-content-center">
                <div>
                    <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-gray-300">Season {SeasonDetail.season_number}</h2>
        
                    <p className="text-gray-300 mt-8">
                        {SeasonDetail.overview}
                    </p>
            </div>
        </div>
        {/* <div className="pt-2 pb-8">
              <iframe className="w-full aspect-video sm: pr-4 pl-4" src={`https://www.2embed.ru/embed/tmdb/tv?id=${tvID}&s=${SeasonDetail.season_number}&e=1`} frameBorder={`0`} allowFullScreen={true}></iframe>
          </div> */}
          <div className="flex flex-wrap flex-row justify-center h-full">
          {epArray.map((element, index) => {
              return (
                  <div key={index} className="px-2 py-2 overflow-hidden">
                  <a key={index} href={`/tv/${tvID}/season/${SeasonDetail.season_number}/${index+1}`}>
                  <img key={index} className="w-72 rounded-lg hover:opacity-70" src={`https://image.tmdb.org/t/p/w500${element.still_path}`} alt={element.name} />
                  <p key={index} className="max-w-[17rem] truncate text-gray-300 justify-center text-sm leading-0 font-semibold py-2">{SeasonDetail.season_number} x {index+1} : {element.name}</p>
                  </a>
                  </div>
              )
          })}
          </div>
          </div>
     );
}
 
export default SeasonInfo;