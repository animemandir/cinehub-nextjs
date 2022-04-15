import Link from 'next/link';
import TvCards from './TvCards'

const TvDisplay = (props) => {
    let { tv, pageid } = props
    let pagenum = [1,2,3,4,5,6,7,8,9,10]
    if (isNaN(pageid) == true){
        pageid = 1
    }
    return (    
        <div className="popular-movies md:mx-24">
            <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                {tv.map(TvCard => {
                    return (<TvCards key={TvCard.id} TvCard={TvCard}/>)
                })}
            </div>
            <div className="flex justify-center flex-wrap">
            <li className="flex-row list-none my-8 pr-2">
                    <Link href="/tv/popular/page/[pageid]" as={`/tv/popular/page/${Number(pageid)-1}`}>
                    <a className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">{`<`}</a>
                    </Link>
                </li>
              {pagenum.map((element, index) => {
                  return (
                    <li key={index} className="flex-row list-none my-8 pr-2">
                    <Link key={index} href="/tv/popular/page/[pageid]" as={`/tv/popular/page/${element}`}>
                    <a className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">{element}</a>
                    </Link>
                </li>
                  )
              })}
            <li className="flex-row list-none my-8 pr-2">
                    <Link href="/tv/popular/page/[pageid]" as={`/tv/popular/page/${Number(pageid)+1}`}>
                    <a className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">{`>`}</a>
                    </Link>
                </li>              
        </div>            
        </div>            
     );
}
 
export default TvDisplay;