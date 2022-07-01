const MovieInfo = (props) => {
    const { MovieDetail, genreArr } = props
    return ( 
<div className="min-h-screen movie-details md:mx-24">
    <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row movie-container">
        <div>
            <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-gray-300">{MovieDetail.title}</h2>
            <div className="flex flex-wrap items-center text-gray-300 text-sm my-4">
                <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"/></g></svg>
                <span className="ml-1">{MovieDetail.vote_average}</span>
                <span className="mx-2">|</span>
                <span>{MovieDetail.release_date}</span>
                <span className="mx-2">|</span>
                <span>{MovieDetail.runtime} minutes.</span>
                <span className="mx-2">|</span>
                <span>{ genreArr.join(' , ')}</span>
            </div>
  
            <p className="text-gray-300 mt-8">
                {MovieDetail.overview}
            </p>
      </div>
  </div>
  <div className="pt-2 pb-8">
              <iframe className="w-full aspect-video sm: pr-4 pl-4" src={`https://www.2embed.to/embed/tmdb/movie?id=${MovieDetail.id}`} frameBorder={`0`} allowFullScreen={true}></iframe>
          </div>
</div>
     );
}
 
export default MovieInfo;
