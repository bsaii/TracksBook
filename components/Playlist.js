import React from 'react';

const Playlist = ({ tracks }) => {

    return (
      <div className="p-6 sm:p-20 lg:p-40 bg-richBlack text-gray-200">
            
                {
                tracks.map((track, index) => (
                    <div key={index} className="flex p-4 hover:border-r-4 border-green-400 w-full h-auto bg-dcBlue mb-4 rounded-md sm:h-28 lg:h-36">        
                    {/* img */}
                    <div className="w-4/12">
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ track.album.images[0].url} alt="album-img" className='w-full sm:h-full' />
                    </div>

                    {/* track and artists */}
                    <div className="w-6/12 ml-4 ">
                            <h2 className='font-display font-medium text-base truncate lg:text-2xl'>{ track.name }</h2>
                            <p className="block font-body font-extralight text-xs lg:text-sm">{ track.artists[0].name }</p>
                    </div>

                    {/* play button */}
                        <div className="w-2/12 flex justify-center items-center">
                            <a href={ track.preview_url }>
                               <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 sm:w-11 sm:h-11"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>     
                            </button> 
                            </a>
                            
                        </div>
                        </div>
                  ))      
               }
      </div>
    );
}

export default Playlist
