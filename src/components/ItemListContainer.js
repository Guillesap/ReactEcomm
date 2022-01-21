import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection , getDocs , getDoc } from "firebase/firestore"



const ItemListContainer = ({ producto }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {


        const coleccionProductos = collection(db,"productos")
        const pedido = getDocs(coleccionProductos)

        pedido
            .then((resultado)=>{
                const docs = resultado.docs
                const docs_formateado = docs.map(doc=>{
                    const producto = {
                        id : doc.id,
                        ...doc.data()
                    }
                    return producto
                })
                setProductos(docs_formateado)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        


    },[id])

    const onAdd = () => { }


    return (
        <ItemList productos={productos}/>
    )
   
}

export default ItemListContainer
