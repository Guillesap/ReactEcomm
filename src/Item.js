

import {Link} from "react-router-dom"

const Item = ({producto}) => {

    const {nombre, foto, stock, precio, info} = producto

    return (
        <article className="item">
            <h2>{nombre}</h2>
            <img src={foto}alt=""/>
            <p>Precio:{precio}</p>
            <Link to={"/item/"+nombre}><button>DETALLES</button></Link>
        </article>
    )
}

export default Item

