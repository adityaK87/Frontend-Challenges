import React, { useState } from 'react';
import axios from 'axios';
import './Index.css';
import img from '../Challenge1/logo192.png'

const MovieApp = () => {
    const movieName = document.getElementById("Movie-Name");

    // const [movieName, setMovieName] = useState(" ");
    const baseUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=581e9311`;
    try {

        axios.get(baseUrl).then((data) => console.log(data))

    } catch (error) {
        console.log(error)
    }

    return (
        <div className='movie-container'>
            <div className='search-movie'>
                <input className='movie-name' id='Movie-Name' placeholder='Enter Movie Name here...' ></input>
                <button className='search-btn'>Search</button>
            </div>

            <div className='details'>
                <img className='poster' alt='poster' src={img} />
                <div className='movie-details'>
                    <h2 className=' details-movie display-movie-name'>Movie Name</h2>
                    <span className='details-movie rating'> ⭐9.0 </span>
                    <div className=' details-movie year-details'>
                        <span className='detail-section'> PG-13 </span>
                        <span className='detail-section'> 152 min </span>
                        <span className='detail-section'> 2008 </span>
                    </div>
                    <div className=' details-movie genre-details'>
                        <span className='genre genre1'> Drama </span>
                        <span className='genre genre2'> Action </span>
                        <span className='genre genre3'> Thriller </span>
                    </div>
                </div>
            </div>

            <div className='cast'>
                <h3 >Plot :</h3>
                <p className='plot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto aut quasi, laboriosam, facere quidem debitis ex
                    culpa dolore impedit fuga! Saepe non, nostrum cumque, quia aliquid, recusandae iure esse quisquam autem modi nulla?</p>
                <h3 >Cast :</h3>
                <p className="caste">Johny depp , akshay kumar ,salman khan</p>
            </div>

        </div>
    )
}

export default MovieApp;


