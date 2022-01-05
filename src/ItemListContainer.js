
import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const productos = [
    { nombre : "Scream" , foto: "./foto4scream.jpg", precio: 2500, stock : 10, info: "120 minutos. Año 1990" },
    { nombre : "Pesadilla", foto:"./foto3pesadilla.jpg" , precio: 2200, stock : 10, info: "110 minutos. Año 1988" },
    { nombre : "El Cubo",foto:"./foto1cubo.jpg" , precio: 2750, stock : 1, info: "105 minutos. Año 1996" },
    { nombre : "Alien " , foto:"./fotoalien.jpg", precio: 2500, stock : 2, info: "125 minutos. Año 1980" },
    { nombre : "Hellraiser" , foto:"./foto2hell.jpg", precio: 3100, stock : 2, info: "130 minutos. Año 1998" },
    { nombre : "Viernes 13" ,foto:"./foto5viernes.jpg", precio: 1900, stock : 10, info: "117 minutos. Año 1988" },
    { nombre : "El Cuervo" ,foto:"./fotocrow.jpg", precio: 1200, stock : 8, info: "147 minutos. Año 1988" },
    { nombre : "Mysery" ,foto:"./fotomisery.jpg", precio: 2500, stock : 10, info: "107 minutos. Año 1988" },
    { nombre : "Saw" ,foto:"./foto0jigsaw.jpg", precio: 1700, stock : 10, info: "122 minutos. Año 2000" },
    { nombre : "It" ,foto:"./fotoit.jpg", precio: 2200, stock : 10, info: "118 minutos. Año 1990" },
    { nombre : "La Cosa" ,foto:"./fotothing.jpg", precio: 1500, stock : 8, info: "107 minutos. Año 1981" },
    { nombre : "Halloween" ,foto:"./NEW02.jpg", precio: 3100, stock : 1, info: "130 minutos. Año 2021" },
    { nombre : "Spiral" ,foto:"./NEW03.jpg", precio: 2900, stock : 3, info: "125 minutos. Año 2021" },
    { nombre : "Resident Evil" ,foto:"./NEW01.jpg", precio: 1900, stock : 10, info: "137 minutos. Año 2201" }

]

const ItemListContainer = ({ titulo }) => {

    let [lista, setLista] = useState([])

    
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 1000)
        })

        promesa
            .then((lista) => {
                console.log("Funcionamiento correcto")
                setLista(lista)
            })
            .catch(() => {
                console.log("Error en el funcionamiento")
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


