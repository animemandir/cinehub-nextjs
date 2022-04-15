import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Image from 'next/image'
// import {DebounceInput} from 'react-debounce-input';
// import { useDebounce } from 'use-debounce';

function Search() {

const [query, setQuery] = useState('');
const [data, setData] = useState()
// const [value] = useDebounce(searchInput, 1000);

const apiKey = '9e43f45f94705cc8e1d5a0400d19a7b7'

useEffect(async () => {
    if(query !== ''){
    const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${query}`
    )
    const apiData = await res.json()
    setData(apiData)
}
}, [query])
    return (
        <div className='bg-zinc-900 h-screen'>
            <Header/>
            <div className='flex justify-center flex-grow text-white'>
            <input
                className='rounded-sm py-2 px-8 bg-zinc-800 text-white text-center' 
                defaultValue={''}
                type="text" 
                name="search" 
                id="search" 
                placeholder='Search for movie or shows'
                onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="popular-movies md:mx-24">
                <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-8 md:-mx-2 lg:-mx-2 xl:-mx-2">
                    {data ? data.results.map(MovieCard => {
                        return (
                            <div key={MovieCard.id + 5} className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
                            <div key={MovieCard.id + 7} className="rounded-md overflow-hidden">
                                {MovieCard.media_type == 'movie' ? 
                            <Link key={MovieCard.id} href="/movie/[id]" as={`/movie/${MovieCard.id}`}>
                            <a title={MovieCard.title} key={MovieCard.id + 1}>
                            <Image className="w-11/12 hover:opacity-70" key={MovieCard.id + 3} title={MovieCard.title} src={`https://image.tmdb.org/t/p/w500${MovieCard.poster_path}`} alt={MovieCard.title} width="1500px" height="2250px"/>
                            </a>
                            </Link> : 
                            <Link key={MovieCard.id} href="/tv/[id]" as={`/tv/${MovieCard.id}`}>
                            <a title={MovieCard.title} key={MovieCard.id + 1}>
                            <Image className="w-11/12 hover:opacity-70" key={MovieCard.id + 3} title={MovieCard.title} src={`https://image.tmdb.org/t/p/w500${MovieCard.poster_path}`} alt={MovieCard.title} width="1500px" height="2250px"/>
                            </a>
                            </Link>    
                            }
                                
                            </div>
                            </div>
                        )
                    }) : <></>}
                </div>
            </div>
        </div>     
      )
}

export default Search
