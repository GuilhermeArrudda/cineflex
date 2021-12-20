import "./css/reset.css";
import "./css/styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Sessoes from "./Sessoes/Sessoes";
import Lugares from "./Lugares/Lugares";
import SuccessPage from "./SuccessPage/SuccessPage";

export default function App() {
    const [reservationData, setReservationData] = useState({
        ids: [],
	    name: "",
	    cpf: "",
        movie: "",
        date: "",
        showtime: ""
    })
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/filme/:filmId" element={<Sessoes />}>
                </Route>
                <Route path="/assentos/:assentosId" element={<Lugares setReservationData={setReservationData} />}>     
                </Route>
                <Route path="/sucesso" element={<SuccessPage reservationData={reservationData} />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}