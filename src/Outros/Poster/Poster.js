import "./styles.css";
import { Link } from "react-router-dom"

export default function Poster({ id, src, alt }) {
    return (
        <Link to={id ? `/filme/${id}` : ""}>
            <li className="poster" >
                <img src={src} alt={alt} />
            </li>
        </Link>
    )
}