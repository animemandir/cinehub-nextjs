import TvCards from './TvCards'

const TvDisplay = (props) => {
    const { tv } = props
    return (    
        <div className="popular-movies md:mx-24">
            <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-8 md:-mx-2 lg:-mx-2 xl:-mx-2">
                {tv.map(TvCard => {
                    return (<TvCards key={TvCard.id} TvCard={TvCard}/>)
                })}
            </div>
        </div>            
     );
}
 
export default TvDisplay;