
import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const productos = [
    { nombre : "Scream" , foto: "./foto4scream.jpg", precio: 2500, stock : 10, info: "120 minutos. Año 1990" },
    { nombre : "Pesadilla", foto:"./foto3pesadilla.jpg" , precio: 2200, stock : 10, info: "110 minutos. Año 1988" },
    { nombre : "El Cubo",foto:"./foto1cubo.jpg" , precio: 2750, stock : 1, info: "105 minutos. Año 1996" },
    { nombre : "Se lo que hicieron " , foto:"./foto6seloque.jpg", precio: 2500, stock : 2, info: "125 minutos. Año 1995" },
    { nombre : "Hellraiser" , foto:"./foto2hell.jpg", precio: 3100, stock : 2, info: "130 minutos. Año 1998" },
    { nombre : "Viernes 13" ,foto:"./foto5viernes.jpg", precio: 1900, stock : 10, info: "117 minutos. Año 1988" }

]

const ItemListContainer = ({ titulo }) => {

    let [lista, setLista] = useState([])

    
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 2000)
        })

        promesa
            .then((lista) => {
                console.log("Funciona")
                setLista(lista)
            })
            .catch(() => {
                console.log("No funciona")
            })

    }, [])

    return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer


