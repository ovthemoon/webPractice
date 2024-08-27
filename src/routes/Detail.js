import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
function Detail() {
    // useParams() returns an object of key/value pairs of URL parameters.
    const { id } = useParams();
    const [isLoading,setLoadingState]=useState(true);
    const [movie,setMovie]=useState(null);
    const getMovie = async () => {
        const json=await (await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=" + id)).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoadingState(false);
    };

    useEffect(() => {
        getMovie();
    },[])
    return (
        <div>
            {isLoading ? <h1>Loading...</h1> :<div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h1>{movie.title}</h1>
            <h2>Published in {movie.year}</h2>
            <ul>
                {movie.genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
            <p>{movie.description_full}</p>
            
            </div>}
        </div>
    );
}

export default Detail;