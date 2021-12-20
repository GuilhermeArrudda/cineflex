import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Rodape from "../Outros/Rodape/Rodape";
import Loading from "../Outros/Loading/Loading";
import Titulo from "../Outros/Titulo/Titulo";
import Cadeira from "./Cadeira/Cadeira";
import Infos from "./Infos/Infos";
import Dados from "./Dados/Dados";
import Botao from "../Outros/Botao/Botao";

export default function Lugares({ setReservationData }) {
    const [lugaresDATA, setLugaresData] = useState(null);
    const { assentosId } = useParams()
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${assentosId}/seats`)
            .then((response) => setLugaresData(response.data))
            .catch((error) => alert(error))
    }, [])
    let navigate = useNavigate();
    const [nameValue, setNameValue] = useState("");
    const [CPFValue, SetCPFValue] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    function toggleSelect(seatId) {
        let newSelectedSeats = [...selectedSeats];
        if(newSelectedSeats.includes(seatId)){
            newSelectedSeats.splice(newSelectedSeats.indexOf(seatId), 1);
        }else{
            newSelectedSeats.push(seatId);
        }
        setSelectedSeats(newSelectedSeats);
    }
    function finish() {
        if(verifyInfo()){
            setReservationData({
                ids: selectedSeats,
                name: nameValue,
                cpf: CPFValue,
                movie: lugaresDATA.movie.title,
                date: lugaresDATA.day.date,
                showtime: lugaresDATA.name
            });
            navigate.push("/sucesso");
        }
    }
    function verifyInfo() {
        if (nameValue && CPFValue && selectedSeats[0] !== undefined) {
            return true;
        }
        return false;
    }
    if (lugaresDATA === null) {
        return (
            <Loading />
        )
    }
    return (
        <article className="lugares" >
            <Titulo text="Selecione o(s) assento(s)" />
            <section className="seats-box">
                {lugaresDATA.seats.map((seat, i) => (
                    <Cadeira
                        number={seat.name}
                        isAvailable={seat.isAvailable}
                        key={seat.id}
                        id={seat.id}
                        toggleSelect={toggleSelect}
                        isSelected={selectedSeats.includes(seat.id)}
                    />))}
                <Infos />
            </section>
            <Dados title="nome" value={nameValue} attValue={(event) => setNameValue(event.target.value)} />
            <Dados title="CPF" value={CPFValue} attValue={(event) => SetCPFValue(event.target.value)} />
            <Botao onclick={finish} text="Reservar assento(s)" />
            <Rodape
                posterURL={lugaresDATA.movie.posterURL}
                movieTitle={lugaresDATA.movie.title}
                id={lugaresDATA.movie.id}
                weekday={lugaresDATA.day.weekday}
                showtime={lugaresDATA.name}
            />
        </article>
    )
}