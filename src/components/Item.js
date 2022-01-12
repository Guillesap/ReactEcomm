import {Link} from "react-router-dom"

const Item = ({ item}) => {
    return (
        <article>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} width={200} ></img>
            <p>Precio : ${item.precio}</p>
            <Link to ={"/item/"+item.id}><button>Detalles</button></Link>
        </article>
    )
}

export default Item