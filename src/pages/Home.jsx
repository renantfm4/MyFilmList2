import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Movie from "./Movie.jsx";
import "./movies.css"
import './Home.css'
import { useNavigate } from "react-router-dom";


const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
function Home(){
    const navigate = useNavigate();

  const deletar = () => {
    localStorage.removeItem("Dados");
    navigate("/");
  };

  const sair = () => {
    navigate("/");
  }
 
    const [topMovies, settopMovies] = useState([])

    const getTopMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        settopMovies(data.results);
    };
    useEffect(() => {
        const TopMovieUrl = `${movieUrl}popular?${apiKey}`;

        getTopMovies(TopMovieUrl)
    });



    return (
      <div className="principal">
        <h2 className="title">Most popular films</h2>
        <button onClick={deletar}>Excluir Conta</button>
        <button onClick={sair}>Deslogar</button>
        <div className="films-container">
            {topMovies && 
            topMovies.map((Movie) => <MovieCard key={Movie.id} movie={Movie} />)}</div>
        
      </div>
    )
  }
  
  export default Home