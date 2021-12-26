/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import Contador from "./Contador"


const peliculas = [
    { nombre : "Scream" , foto: <img src="/foto4scream.jpg" alt=""/>, precio: 2500, stock : 10, info: "120 minutos. Año 1990" },
    { nombre : "Pesadilla", foto:<img src="/foto3pesadilla.jpg" alt=""/> , precio: 2200, stock : 10, info: "110 minutos. Año 1988" },
    { nombre : "El Cubo",foto:<img src="/foto1cubo.jpg" alt=""/> , precio: 2750, stock : 1, info: "105 minutos. Año 1996" },
    { nombre : "Se lo que hicieron " , foto:<img src="/foto6seloque.jpg" alt=""/>, precio: 2500, stock : 2, info: "125 minutos. Año 1995" },
    { nombre : "Hellraiser" , foto: <img src="/foto2hell.jpg" alt=""/>, precio: 3100, stock : 2, info: "130 minutos. Año 1998" },
    { nombre : "Viernes 13" ,foto:<img src="/foto5viernes.jpg" alt=""/>, precio: 1900, stock : 10, info: "117 minutos. Año 1988" }

]


function ItemDetail() {

    const [productos, setPeliculas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        const promesa = new Promise((res) => {
            setTimeout(() => {
                console.log("Soy el timeout")
                res(peliculas)
            }, 2000)
        })

        promesa.then((peliculas) => {
            setLoading(false)
            setPeliculas(peliculas)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const getItem = () => { }
    return (
        <div id="ventaVhs">
            <h1>Compra tu Peli favorita</h1>
            {productos.map((item, idx) => (
                <ul>
                    <li key={idx}>
                        <h2> {item.nombre}</h2>
                        <h2> {item.foto}</h2>
                        <h3>Precio: $ {item.precio} </h3>
                        <h4>Stock: {item.stock}</h4>
                        <h5>Info: {item.info}</h5>
                        <Contador stock={10} initial={1} />
                        <h5><button>Agregar al Carrito</button></h5>
                    </li>
                </ul>
            )

            )}
        </div>
    )
}

export default ItemDetail

