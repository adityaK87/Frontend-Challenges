import React ,{useState} from 'react';
import './Index.css';

const Result = () => {

    
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
    const EnterMovie = () => {

        if (movieName.length <= 0) {
            return (
                <h1>Movie Not found</h1>
            )
        } else {
            try {
                // axios.get(baseUrl).then((data) => console.log(data.title));
                fetch(baseUrl)
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
                        setGenre(data.Genre.split(","))
              
                        // console.log(data.Genre.split(",").join());
                    })

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>

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
                        <span className='genre genre3'>{genre} </span>
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

export default Result;