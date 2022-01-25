import MovieCards from './MovieCards'

const MovieDisplay = (props) => {
    const { movie } = props
    return (    
        <div className="popular-movies mx-24">
            <div className="flex flex-wrap overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                {movie.map(MovieCard => {
                    return (<MovieCards key={MovieCard.id} MovieCard={MovieCard}/>)
                })}
            </div>
        </div>            
     );
}
 
export default MovieDisplay;