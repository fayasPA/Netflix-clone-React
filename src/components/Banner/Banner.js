import React, { useEffect, useState } from 'react'
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants'
import axios from 'axios'
import "./Banner.css"
function Banner() {
  const [movies, setMovies] = useState()

  useEffect(() => {
    axios.get(`${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovies(response.data.results[0])
    })
  },[])

  return (
    <div style={{backgroundImage:`url(${movies ? imageUrl+movies.backdrop_path: ""})`}} className='banner'>
        <div className='content'>
          <h1 className='title'>{movies ? movies.name ? movies.name: movies.title : ""}</h1>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movies ? movies.overview: ""}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner