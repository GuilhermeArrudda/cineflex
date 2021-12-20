import "./styles.css"
import Poster from "../Poster/Poster"


export default function Footer({ posterURL, movieTitle, id, weekday, showtime}) {

    return (
        <footer>
            <ul><Poster src={posterURL} alt={movieTitle} id={id} /></ul>
            <div className="rodape-text">
                {movieTitle}
                <p>{weekday ? `${weekday} - ${showtime}` : ""}</p>
            </div>
        </footer>
    )
} 