import "./styles.css"
import Showtime from "./Showtime/Showtime"

export default function Day({ weekday, date, showtimes}) {
    return (
        <div className="day" >
            {`${weekday} - ${date}`}
            <div className="showtime-box" >
                {showtimes.map((showtime) => (
                    <Showtime
                        name={showtime.name}
                        id={showtime.id}
                        key={showtime.id}
                    />))}
            </div>
        </div>
    )
}