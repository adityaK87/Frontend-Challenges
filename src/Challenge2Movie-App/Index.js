import React, { useState } from "react";
// import axios from 'axios';
import "./Index.css";
import Result from "./Result.js";

const MovieApp = () => {
  // const movieName = "";

  const [movieName, setMovieName] = useState("");
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [runTime, setRunTime] = useState("");
  const [year, setYear] = useState("");
  const [rated, setRated] = useState("");
  const [plot, setPlot] = useState("");
  const [actors, setActors] = useState("");
  const [genre, setGenre] = useState("");

  const apikey = "581e9311";
  let baseUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`;

  const handleMovie = () => {
    if (movieName.length <= 0) {
      return <Result />;
    } else {
      console.log("clicked handleMovie button");
      console.log("");
      let data = fetch(baseUrl)
        .then((movieData) => movieData.json())
        .then((movieData) => {
          console.log(movieData);
          setPoster(movieData.Poster);
          setTitle(movieData.Title);
          setImdbRating(movieData.imdbRating);
          setRunTime(movieData.Runtime);
          setYear(movieData.Year);
          setRated(movieData.Rated);
          setPlot(movieData.Plot);
          setActors(movieData.Actors);
          setGenre(movieData.Genre);
          // console.log(movieData.Genre.split(",").join('<div></div>'))
        });
      console.log(data);
    }
    // setMovieName("")
  };

  // if (movieName.length <= -1) {
  //     return (
  //         <h1>Movie Not found</h1>
  //     )
  // } else {
  //     try {
  //         // axios.get(baseUrl).then((data) => console.log(data.title));
  //         fetch(baseUrl)
  //             .then((resp) => resp.json())
  //             .then((data) => {
  //                 // console.log(data)
  //                 setPoster(data.Poster)
  //                 setTitle(data.Title)
  //                 setImdbRating(data.imdbRating)
  //                 setRunTime(data.Runtime)
  //                 setYear(data.Year)
  //                 setRated(data.Rated)
  //                 setPlot(data.Plot)
  //                 setActors(data.Actors)
  //             })

  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  return (
    <div className="movie-container">
      <div className="search-movie">
        <input
          className="movie-name"
          id="Movie-Name"
          placeholder="Enter Movie Name here..."
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        ></input>
        <button className="search-btn" onClick={() => handleMovie()}>
          Search
        </button>
      </div>

      <div className="details">
        <div className="movie-details">
          <img className="poster" alt="poster" src={poster} />
          <div className="movie-display-container">
            <h2 className=" details-movie display-movie-name">{title}</h2>
            <span className="details-movie rating"> ⭐{imdbRating} </span>
            <div className=" details-movie year-details">
              <span className="detail-section">{rated} </span>
              <span className="detail-section">{runTime}</span>
              <span className="detail-section"> {year} </span>
            </div>
            <div className=" details-movie genre-details">
              <div className="genre">{genre}</div>
              {/* <span className='genre genre1'> {genre} </span>
                        <span className='genre genre2'> Action </span>
                        <span className='genre genre3'> Thriller </span> */}
              {/* <div className='genre'>{genre.split(",").join(<span></span>)} </div> */}
            </div>{" "}
          </div>
        </div>
        <div className="cast">
          <h3>Plot :</h3>
          <p className="plot">{plot}</p>
          <h3>Cast :</h3>
          <p className="caste">{actors}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
