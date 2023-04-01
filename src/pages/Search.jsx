import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";


const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function Search() {


    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };
    useEffect(() => {
        const searchUrl = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchUrl)
    }, [query]);

    return (
        <div className="principal">
        <h2 className="title"> Resutados da busca: <span>{query}</span></h2>
        <div className="films-container">
            {movies && 
            movies.map((Movie) => <MovieCard key={Movie.id} movie={Movie} />)}</div>
        
      </div>
    );
  }
  
  export default Search