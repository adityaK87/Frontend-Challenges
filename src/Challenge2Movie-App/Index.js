import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Index.css';
import img from '../Challenge1Form/logo192.png';

const MovieApp = () => {
    // const movieName = "";

    const [movieName, setMovieName] = useState(" ");
    const [poster, setPoster] = useState(null);
    const [title, setTitle] = useState("");
    const [imdbRating, setImdbRating] = useState("");
    const [runTime, setRunTime] = useState("");
    const [year, setYear] = useState("");
    const [rated, setRated] = useState("");
    const [plot, setPlot] = useState("");
    const [actors, setActors] = useState("");
    const [genre, setGenre] = useState("");


    const baseUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=581e9311`;


    // useEffect(() => {
    // const a = fetch(baseUrl)
    //     .then((resp) => resp.json())
    //     .then((data) =>
    // return
    // console.log(data)
    // setPoster(data.Poster)

    // }, []);

    if (movieName.length <= 0) {
        return (
            <h1>Movie Not found</h1>
        )
    } else {
        try {
            // axios.get(baseUrl).then((data) => console.log(data.title));
            const a = fetch(baseUrl)
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setPoster(data.Poster)
                    setTitle(data.Title)
                    setImdbRating(data.imdbRating)
                    setRunTime(data.Runtime)
                    setYear(data.Year)
                    setRated(data.Rated)
                    setPlot(data.Plot)
                    setActors(data.Actors)
                })

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='movie-container'>
            <div className='search-movie'>
                <input className='movie-name' id='Movie-Name' placeholder='Enter Movie Name here...' value={movieName} onChange={(e) => setMovieName(e.target.value)}></input>
                <button className='search-btn' onClick={() => alert("hello")}>Search</button>
            </div>

            <div className='details'>
                <img className='poster' alt='poster' src={poster} />
                <div className='movie-details'>
                    <h2 className=' details-movie display-movie-name'>{title}</h2>
                    <span className='details-movie rating'> ⭐{imdbRating} </span>
                    <div className=' details-movie year-details'>
                        <span className='detail-section'>{rated} </span>
                        <span className='detail-section'>{runTime}</span>
                        <span className='detail-section'> {year} </span>
                    </div>
                    <div className=' details-movie genre-details'>
                        {/* <span className='genre genre1'> Drama </span>
                        <span className='genre genre2'> Action </span>
                        <span className='genre genre3'> Thriller </span> */}
                        <span className='genre genre3'>{data.genre.split(",").join()} </span>
                    </div>
                </div>
            </div>

            <div className='cast'>
                <h3 >Plot :</h3>
                <p className='plot'>{plot}</p>
                <h3 >Cast :</h3>
                <p className="caste">{actors}</p>
            </div>

        </div>
    )
}

export default MovieApp;


