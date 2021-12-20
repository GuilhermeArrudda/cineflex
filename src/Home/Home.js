import "./styles.css";
import Title from "../Outros/Titulo/Titulo";
import MoviePoster from "../Outros/Poster/Poster";
import Loading from "../Outros/Loading/Loading";
import axios from "axios";
import { useState, useEffect } from "react";


export default function HomePage() {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        .then((response) => setMovies(response.data))
        .catch((error) => alert(error))
    }, [])

    if(movies === null){
        return (
            <Loading />
        )
    }

    return (
        <main className="home" >
            <Title text="Selecione o filme" />
            <ul className="movie-box" >
                {movies.map((movie) => (
                <MoviePoster
                    key={movie.id}
                    id={movie.id}
                    src={movie.posterURL}
                    alt={`Poster de ${movie.title}`}
                />))}
            </ul>
        </main>
    )
}