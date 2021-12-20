import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header.js";
import PaginaInicial from "./PaginaInicial";
import Movie from "./Movie";
import Sessao from "./Sessao";
import PedidoFeito from "./PedidoFeito";


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaInicial />}>
                </Route>
                <Route path="/sessoes/:idFilme" element={<Movie />}>
                </Route>
                <Route path="/assentos/:idSessao" element={<Sessao />}>
                </Route>
                <Route path="/sucesso" element={<PedidoFeito />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}