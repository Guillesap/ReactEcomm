import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection , getDocs , query , where } from "firebase/firestore"
import Loader from "./Loader";

const ItemListContainer = ({ producto }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {


        if(id){
            const coleccionProductos = collection(db,"productos")
            const filtro1 = where("categoria","==",id)
            const filtro2 = where("precio",">",0)
            const consulta = query(coleccionProductos,filtro1,filtro2)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })
        }else {
            const coleccionProductos = collection(db,"productos")
            const pedido = getDocs(coleccionProductos)
            pedido
                .then((resultado)=>{
                    setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })
        }


    },[id])

 
    return (
        <Container>
        <Row style={{alignItems: 'stretch', justifyContent: 'space-evenly'}}>
          {loading ? <Loader /> : <ItemList productos={productos} />}
        </Row>
      </Container>
    )
   
}

export default ItemListContainer
