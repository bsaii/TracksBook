import Head from 'next/head'
import { useState } from 'react';
import Playlist from '../components/Playlist'
import Title from '../components/Title'

//fetching the data
export const getStaticProps = async () => {
  const res = await fetch('https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query=a&count=50&type=tracks', {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com",
      "x-rapidapi-key": "9b1b120682mshb65f7ec7a720ed3p107235jsnf9fc3aa6abd2"
    }
  });
  const data = await res.json();

  if (!data) {
     return {
       notFound: true,
     }
  }

  return {
    props: {data}
  }
}

export default function Home({ data }) {

  const [tracks, setTracks] = useState(data.Results)

  return (
    <div>
      <Head>
        <title>Tracks Book App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title setTracks={ setTracks } />
        <Playlist tracks={ tracks } />
      </main>
    </div>
  )
}
