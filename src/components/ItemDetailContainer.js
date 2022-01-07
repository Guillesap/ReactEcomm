import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const detalle= [
    {id: 1, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 2, stock: 5, nombre: "Halloweewn Kills", precio: 4000, img: "/img/NEW02.jpg", categoria: "novedades", detalle: "Remake de pelicula clásica de horror, con uno de los mejores serial Killers: Michael Myers. . Año 2021."},
    {id: 3, stock: 5, nombre: "Maligno", precio: 3000, img: "/img/NEW04.jpg", categoria: "novedades", detalle: "Madison está paralizada por visiones de asesinatos espeluznantes, y su tormento empeora cuando descubre que estos sueños de vigilia son, de hecho, realidades aterradoras. Año 2021."},
    {id: 4, stock: 5, nombre: "Spiral", precio: 2500, img: "/img/NEW03.jpg", categoria: "novedades", detalle: "Nueva entrega de la saga Saw. Jigsaw a pesar de su muerte sigue acechando!. Año 2021."},
    {id: 5, stock: 5, nombre: "Scream 2", precio: 2000, img: "/img/foto4scream.jpg", categoria: "clasicos", detalle: "Dos años después de la masacre en Woodsboro, Sidney y Randy tratan de reconstruir sus vidas en otra ciudad. Su tranquilidad se verá perturbada por una ola de brutales asesinatos cometidos por un psicópata enmascarado. Año 1997."},
    {id: 6, stock: 5, nombre: "It", precio: 2500, img: "/img/fotoit.jpg", categoria: "clasicos", detalle: "Un pueblo de Maine está siendo aterrorizado por una fuerza malévola oculta tras la máscara de un payaso. Hartos de ver como las víctimas se suceden una tras otra, siete amigos de una pandilla de la infancia deciden unirse para luchar contra el mal. Año 1990."},
    {id: 7, stock: 5, nombre: "Misery", precio: 3000, img: "/img/fotomisery.jpg", categoria: "clasicos", detalle: "Un autor se recupera de un accidente en la casa de una admiradora psicótica, quien le exige que escriba un libro solo para ella. Año 1990."},
    {id: 8, stock: 5, nombre: "The Thing", precio: 3500, img: "/img/fotothing.jpg", categoria: "clasicos", detalle: "Un equipo científico de la Antártida descubre un ente extraño que podría ser letal para la humanidad, un extraterrestre que puede duplicar otras formas de vida. Año 1982."},
    {id: 9, stock: 5, nombre: "The Crow", precio: 2100, img: "/img/fotocrow.jpg", categoria: "clasicos", detalle: "Eric Draven, un joven guitarrista de rock, es brutalmente asesinado junto a su prometida Shelly. Un año después, Eric vuelve a la Tierra, guiado por un cuervo negro, en busca de venganza. Año 1994."},
    {id: 10, stock: 5, nombre: "The Cube", precio: 2200, img: "/img/foto1cubo.jpg", categoria: "clasicos", detalle: "Seis personas se despiertan en lo que al principio parece ser una celda. Pronto se dan cuenta de que no están en una celda normal, si no en un extraño rompecabezas en forma de cubo lleno de sorpresas mortales. Año 1997."},
    {id: 11, stock: 5, nombre: "Friday 13th", precio: 3500, img: "/img/foto5viernes.jpg", categoria: "clasicos", detalle: "El campamento de verano del lago Cristal reabre sus puertas tras permanecer varios años cerrado a raíz de un accidente. A partir de ese momento, comienza a aparecer gente muerta en extrañas circunstancias Año 1980."},
    {id: 12, stock: 5, nombre: "Saw", precio: 4500, img: "/img/foto0jigsaw.jpg", categoria: "clasicos", detalle: "Pelicula de culto, en la cual uno de los mas aterradores Asesinos: Jigsaw, atrapa a sus victimas y las obliga a jugar jugos muy particulares. Año 2003."},
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