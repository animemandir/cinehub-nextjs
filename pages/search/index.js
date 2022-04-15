import React, {useState, useEffect} from 'react'
import Link from 'next'
import Header from '../../components/Header'
// import {DebounceInput} from 'react-debounce-input';
// import { useDebounce } from 'use-debounce';

function Search() {

const [searchInput, setSearchInput] = useState('');
const [data, setData] = useState([])
// const [value] = useDebounce(searchInput, 1000);

const apiKey = '4c1c4651b470f738873f80310325d848'

useEffect(() => {
    const apiReq = async () => {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${searchInput}`
        )
        const apiData = await res.json()
        setData(apiData.results)
    }
    apiReq()
}, [searchInput])

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
                onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className="popular-movies md:mx-24">
                <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-8 md:-mx-2 lg:-mx-2 xl:-mx-2">
                    {data && data.map(MovieCard => {
                        return (
                            <div key={MovieCard.id + 5} className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
                            <div key={MovieCard.id + 7} className="rounded-md overflow-hidden">
                                <Link key={MovieCard.id} href="/movie/[id]" as={`/movie/${MovieCard.id}`}>
                                <a title={MovieCard.title} key={MovieCard.id + 1}>
                                <img className="w-11/12 hover:opacity-70" key={MovieCard.id + 3} title={MovieCard.title} src={`https://image.tmdb.org/t/p/w500${MovieCard.poster_path}`} alt={MovieCard.title} width="1500px" height="2250px"/>
                                </a>
                                </Link>
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>     
      )
}

export default Search