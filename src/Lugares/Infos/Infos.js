import "./styles.css";
import Seat from "../Cadeira/Cadeira";

export default function Glossary() {
    return (
        <div className="glossary">
            <div>
                <Seat
                    number=""
                    isAvailable={true}
                    toggleSelect={() => { }}
                    isSelected={true}
                />
                Selecionado
            </div>
            <div>
                <Seat
                    number=""
                    isAvailable={true}
                    toggleSelect={() => { }}
                    isSelected={false}
                />
                Disponível
            </div>
            <div>
                <Seat
                    number=""
                    isAvailable={false}
                    toggleSelect={() => { }}
                    isSelected={false}
                />
                Indisponível
            </div>
        </div>
    )
}