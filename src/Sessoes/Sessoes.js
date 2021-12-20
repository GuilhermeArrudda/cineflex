import "./styles.css";
import Title from "../Outros/Titulo/Titulo";
import axios from "axios";
import { useState, useEffect } from "react";
import Day from "./Day/Day";
import { useParams } from "react-router-dom";
import Loading from "../Outros/Loading/Loading";
import Footer from "../Outros/Rodape/Rodape";

export default function SessionsPage() {
    const { filmId } = useParams();
    const [session, setSession] = useState(null);
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${filmId}/showtimes`)
            .then((response) => setSession(response.data))
            .catch((error) => alert(error))
    }, [])

    if (session === null) {
        return (
            <Loading />
        )
    }

    return (
        <article className="sessionsPage" >
            <Title text="Selecione o horário" />
            <section className="days-box" >
                {session.days.map((day) => (
                    <Day
                        weekday={day.weekday}
                        date={day.date}
                        showtimes={day.showtimes}
                        key={day.id}
                    />
                ))}
            </section>
            <Footer
                posterURL={session.posterURL}
                movieTitle={session.title}
                id={session.id}
            />
        </article>
    )
}