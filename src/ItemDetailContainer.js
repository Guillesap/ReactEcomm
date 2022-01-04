
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"


const detalle= { nombre : "Scream" , foto: "/foto4scream.jpg", precio: 2500, stock : 10, info: "120 minutos. Año 1990" }


const ItemDetailContainer = () => {
    const [item, setProducto]= useState ({})

    useEffect(() => {
        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(detalle)
            }, 1000)
        })

        promesa
            .then((item) => {
                console.log("Funciona")
                setProducto(item)
            })
            .catch(() => {
                console.log("No funciona")
            })

    }, )


    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}
export default ItemDetailContainer
