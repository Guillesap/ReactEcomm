import ItemList from "./ItemList.js"
import {  useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const peliculas= [
    {id: 1, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades"},
    {id: 2, stock: 7, nombre: "Halloween Kills", precio: 4000, img: "/img/NEW02.jpg", categoria: "novedades"},
    {id: 3, stock: 5, nombre: "Maligno", precio: 3000, img: "/img/NEW04.jpg", categoria: "novedades"},
    {id: 4, stock: 7, nombre: "Spiral", precio: 2500, img: "/img/NEW03.jpg", categoria: "novedades"},
    {id: 5, stock: 10, nombre: "La Purga", precio: 2100, img: "/img/NOVLAPURGA.jpg", categoria: "novedades"},
    {id: 6, stock: 7, nombre: "Wrong Turn", precio: 2500, img: "/img/NOVWRONG.jpg", categoria: "novedades"},
    {id: 7, stock: 11, nombre: "CountDown", precio: 2100, img: "/img/NOVLAHORA.jpg", categoria: "novedades"},
    {id: 8, stock: 7, nombre: "Conjuring", precio: 2700, img: "/img/NOVCONJURO.jpg", categoria: "novedades"},
    {id: 9, stock: 10, nombre: "Scream 2", precio: 2000, img: "/img/foto4scream.jpg", categoria: "clasicos"},
    {id: 10, stock: 8, nombre: "It", precio: 2500, img: "/img/fotoit.jpg", categoria: "clasicos"},
    {id: 11, stock: 10, nombre: "Misery", precio: 3000, img: "/img/fotomisery.jpg", categoria: "clasicos"},
    {id: 12, stock: 8, nombre: "The Thing", precio: 3500, img: "/img/fotothing.jpg", categoria: "clasicos"},
    {id: 13, stock: 8, nombre: "The Crow", precio: 2100, img: "/img/fotocrow.jpg", categoria: "clasicos"},
    {id: 14, stock: 8, nombre: "The Cube", precio: 2200, img: "/img/foto1cubo.jpg", categoria: "clasicos"},
    {id: 15, stock: 8, nombre: "Friday 13th", precio: 3500, img: "/img/foto5viernes.jpg", categoria: "clasicos"},
    {id: 16, stock: 8, nombre: "Saw", precio: 4000, img: "/img/foto0jigsaw.jpg", categoria: "clasicos"},
    {id: 17, stock: 10, nombre: " Blair Witch ", precio: 5000, img: "/img/PARABRUJA.jpg", categoria: "paranormal"},
    {id: 18, stock: 8, nombre: "Grudge", precio: 3500, img: "/img/PARAGRUDGE.jpg", categoria: "paranormal"},
    {id: 19, stock: 10, nombre: "insidius", precio: 3000, img: "/img/PARAINSIDIUS.jpg", categoria: "paranormal"},
    {id: 20, stock: 8, nombre: "Ouija", precio: 3150, img: "/img/PARAOUIJA.jpg", categoria: "paranormal"},
    {id: 21, stock: 8, nombre: "Paranormal", precio: 2100, img: "/img/PARAPARA.jpg", categoria: "paranormal"},
    {id: 22, stock: 8, nombre: "Poltergeist", precio: 2200, img: "/img/PARAPOLTER.jpg", categoria: "paranormal"},
    {id: 23, stock: 8, nombre: "Sinister", precio: 3700, img: "/img/PARASINISTER.jpg", categoria: "paranormal"},
    {id: 24, stock: 8, nombre: "The Ring", precio: 4500, img: "/img/PARARING.jpg", categoria: "paranormal"},
    {id: 25, stock: 5, nombre: "Jason X", precio: 3000, img: "/img/SERIALJASONX.jpg", categoria: "serial"},
    {id: 26, stock: 7, nombre: "Candyman", precio: 3000, img: "/img/SERIALCANDY.jpg", categoria: "serial"},
    {id: 27, stock: 8, nombre: "Chucky", precio: 3000, img: "/img/SERIALCHUCKY.jpg", categoria: "serial"},
    {id: 28, stock: 8, nombre: "Leatherface", precio: 3000, img: "/img/SERIALEATHERFACE.jpg", categoria: "serial"},
    {id: 29, stock: 8, nombre: "Hannibal", precio: 3000, img: "/img/SERIALHANNIBAL.jpg", categoria: "serial"},
    {id: 30, stock: 8, nombre: "Pesadilla Final", precio: 3000, img: "/img/SERIALFREDDY.jpg", categoria: "serial"},
    {id: 31, stock: 8, nombre: "Slender Man", precio: 2500, img: "/img/SERIALSLENDERMAN.jpg", categoria: "serial"},
    {id: 32, stock: 8, nombre: "Psicosis", precio: 4000, img: "/img/SERIALPSICOSIS.jpg", categoria: "serial"},
]

const ItemListContainer = ({ titulo }) => {

    let [lista, setLista] = useState([])
    const {id} = useParams()
    console.log(id)

    
  
    useEffect(() => {
        if(id){
            console.log("Peliculas de la categoria " + id)
            const filterCategoria = peliculas.filter(e => e.categoria === id);
            console.log(filterCategoria)
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(filterCategoria)
                }, 1000)
            })
            promesa
                .then((lista) => {
                    console.log("Great")
                    setLista(lista)
                })
                .catch(() => {
                    console.log("Bad")
                })
        }else{
            console.log("Aca se piden todas las peliculas")
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(peliculas)
                }, 1000)
            })
            promesa
                .then((lista) => {
                    console.log("Great")
                    setLista(lista)
                })
                .catch(() => {
                    console.log("Bad")
                })
        }

    }, [id])

        return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer