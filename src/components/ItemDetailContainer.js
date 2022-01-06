import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const detalle= [
    {id: 1, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 2, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 3, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 4, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 5, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 6, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 7, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 8, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 9, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 10, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 11, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 12, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
]

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ({})
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        if(id){
            const ProductoSeleccionado = detalle.find(e => e.id === parseInt(id))
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(ProductoSeleccionado )
                }, 1000)
            })
            promesa
                .then((producto) => {
                    console.log("Great")
                    setProducto(producto)
                })
                .catch(() => {
                    console.log("Bad")
                })
        }
        

    }, [id])
    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer