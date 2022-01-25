const MovieInfo = (props) => {
    const { MovieDetail, genreArr } = props
    return ( 
<div className="movie-details mx-24">
    <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row movie-container">
        <div className="flex-none">
            <img src={`https://image.tmdb.org/t/p/w500${MovieDetail.poster_path}`} alt="poster" className="w-64 lg:w-96"></img>
        </div>
        <div className="md:ml-24">
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
  
            <div className="mt-12">
              <a href={`/play/${MovieDetail.id}`}>
              <button 
                  className="inline-flex items-center bg-gray-500 text-gray-300 rounded font-semibold px-5 py-4 hover:bg-gray-600 transition ease-in-out duration-150"
              >
                  <svg className="w-6 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                  <span className="ml-2">
                  <iframe src={`https://www.2embed.ru/embed/tmdb/movie?id=${MovieDetail.id}`} frameBorder={`0`} allowFullScreen={`true`} width={`620px`} height={`396px`}></iframe>
                  </span>
              </button>
            </a>
          </div>
      </div>
  </div>
</div>
     );
}
 
export default MovieInfo;