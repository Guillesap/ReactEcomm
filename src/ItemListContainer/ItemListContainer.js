/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import ItemCount from "./ItemCount"


const productosIniciales = [
    { id : 1 , nombre : "Producto 1" , stock : 5 },
    { id : 2 , nombre : "Producto 2" , stock : 5 },
    { id : 3 , nombre : "Producto 3" , stock : 5 },
    { id : 4 , nombre : "Producto 4" , stock : 5 },
    { id : 5 , nombre : "Producto 5" , stock : 5 }
]


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        //console.log("Soy un efecto")
        //Aca haria un pedido a una API REST / o DB 
        //consigo un resultado / archivo
        //modifico el estado
        
        const promesa = new Promise((res)=>{
            //rej() //rejected
            setTimeout(()=>{
                console.log("Soy el timeout")
                //setLoading(false)
                res(productosIniciales) //resolve - fulfilled
            },5000)
        })
        
        promesa.then((productos)=>{
            console.log("Todo bien")
            console.log(productos)
            setLoading(false)
            setProductos(productos)
        })
        //promesa.catch(()=>{})
        //const resultado = fetch()
    },[])


    const onAdd = () => { }

    if(loading){
        return (
            <div>
                {greeting}!
                <p>Cargando...</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        )
    }else{
        return (
            <div>
                {greeting}!
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        )
    }
}

export default ItemListContainer

