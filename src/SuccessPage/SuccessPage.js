import "./styles.css";
import axios from "axios";
import Title from "../Outros/Titulo/Titulo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Outros/Loading/Loading";
import Text from "./Texto/Texto";
import Button from "../Outros/Botao/Botao";

export default function SuccessPage({ reservationData }) {
    const [response, setResponse] = useState(null);
    useEffect(() => {
        axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {
            ids: reservationData.ids,
            name: reservationData.name,
            cpf: reservationData.cpf
        })
            .then((response) => { setResponse(true) })
            .catch((error) => setResponse(false))
    }, [])
    if (response === null) {
        return (
            <Loading />
        )
    }
    if (response && reservationData.name) {
        return (
            <article className="success-page" >
                <Title text="Pedido feito com sucesso!" />
                <section className="text-box" >
                    <Text title="Filme e sessão">
                        <p>{reservationData.movie}</p>
                        <p>{reservationData.date} {reservationData.showtime}</p>
                    </Text>
                    <Text title="Ingressos">
                        {reservationData.ids.map((id) => <p key={id} >{`Assento ${(((id - 1) % 50) + 1)}`}</p>)}
                    </Text>
                    <Text title="Comprador">
                        <p>Nome: {reservationData.name}</p>
                        <p>CPF: {reservationData.cpf}</p>
                    </Text>
                </section>
                <Link to="/">
                    <Button onclick={() => { }} text="Voltar pra Home" />
                </Link>
            </article>
        )
    } else {
        return (
            <article className="success-page" >
                <Title text="Ocorreu um erro, tente mais tarde!" />
                <Link to="/">
                    <Button onclick={() => { }} text="Voltar pra Home" />
                </Link>
            </article>
        )
    }
}