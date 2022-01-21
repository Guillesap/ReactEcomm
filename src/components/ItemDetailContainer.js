import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { db } from "./firebase"
import { collection, getDoc , doc } from "firebase/firestore"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const coleccionProductos = collection(db,"productos")
        const docRef = doc(coleccionProductos,id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setProducto(producto)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])

    return (
        <div>
            {loading ? <span className="loader"></span> : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
