import React, { useState } from 'react'

const Title = ({setTracks}) => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [noSearch, setNoSearch] = useState(false)

    const getByQuery = async (search) => {
        const req = await fetch(
            `https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query=${search}&count=50&type=tracks`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host":
                        "unsa-unofficial-spotify-api.p.rapidapi.com",
                    "x-rapidapi-key":
                        "9b1b120682mshb65f7ec7a720ed3p107235jsnf9fc3aa6abd2",
                },
            }
        );
        const res = await req.json();
        return res.Results
    };
        

    const handleSubmit = async (e) => {
        await e.preventDefault();
        if (query === '') {
            setNoSearch(true)
        } else {
            setNoSearch(false)
            setLoading(true);
            const data = await getByQuery(query);
            await setTracks(data);
            setQuery('');
            setLoading(false);
        }
    }

    return (
      <div className="flex flex-col bg-richBlack2 text-gray-200 p-2 sm:flex-row sm:justify-around sm:items-center">
        {/* The title */}
        <div className="my-8 sm:my-20 lg:my-28">
          <h1 className="font-display font-bold text-4xl text-center sm:text-left sm:text-7xl lg:text-8xl">
            Tracks Book
          </h1>
          <p className="font-body text-base text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* The Search Bar */}
        <div>
            <form className='flex justify-center items-center mb-10' onSubmit={handleSubmit}>
            <input
            type="text"
            value={query}        
            className="border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent rounded max-w-xs w-full h-5 p-6 text-base font-body text-gray-800"
            placeholder='Search tracks and artists'
            onChange={(e) => setQuery(e.target.value)}        
          />
          {/* <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
            </form>
            <div className='block'>
            {loading && <p className='font-display font-bold text-lg text-center text-green-400'>LOADING...</p>}          
            {noSearch && <p className='font-display font-bold text-lg text-center text-red-400'>ERROR...Empty Search</p>}          
            </div>    
        </div>
       
       
      </div>
    );
}

export default Title
