import "./styles.css"

export default function Text({title, children}) {
    return(
        <div className="text" >
            <h3>{title}</h3>
            <div className="content" >{children}</div>
        </div>
    )
}