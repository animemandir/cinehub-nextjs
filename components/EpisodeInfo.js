import Link from "next/link";

const EpisodeInfo = (props) => {
    const { EpisodeDetail, seasonid, epid, showid } = props
    return (       
        <div className="text-center min-h-screen season-details md:mx-24">
            <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row season-container place-content-center">
                <div>
                    <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-gray-300">{seasonid} x {epid} : {EpisodeDetail.name}</h2>
        
                    <p className="text-gray-300 mt-8">
                        {EpisodeDetail.overview}
                    </p>
            </div>
        </div>
        <div className="pt-2 pb-8">
              <iframe className="w-full aspect-video sm: pr-4 pl-4" src={`https://www.2embed.to/embed/tmdb/tv?id=${showid}&s=${seasonid}&e=${epid}`} frameBorder={`0`} allowFullScreen={true}></iframe>
          </div>
          </div>
     );
}
 
export default EpisodeInfo;
