/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import ItemCount from "./ItemCount"


const productosIniciales = [
    { nombre : "Scream" , precio: 2500, stock : 5 },
    { nombre : "Pesadilla" , precio: 2000, stock : 10 },
    { nombre : "El Cubo" , precio: 2500, stock : 6 },
    { nombre : "Se lo que hicieron el Verano Pasado" , precio: 2500, stock : 2 },
    { nombre : "Hellraiser" , precio: 2500, stock : 4 },
    { nombre : "Viernes 13" , precio: 2500, stock : 10 }

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
    return (
    <div id="ventaVhs">
    <h1>Vhs Recomendados del mes</h1>
    {productos.map ( (item, idx)=> (
        <li key={idx}>
        Nombre: {item.nombre}  Precio: {item.precio}   Stock:  {item.stock}
        </li>
    )
    ) }    
    </div>
    )
}



export default ItemListContainer

