import "./styles.css"
import { Link } from "react-router-dom"

export default function Showtime({ name, id }) {
    return (
        <Link to={`/assentos/${id}`}>
            <button className="showtime">
                {name}
            </button>
        </Link>
    )
}