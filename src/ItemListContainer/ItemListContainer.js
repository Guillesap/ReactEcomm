/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import ItemCount from "./ItemCount"
import Contador from "./Contador"
import 'bootstrap/dist/css/bootstrap.min.css';

const productosIniciales = [
    { nombre : "It" , foto: <img src="/fotoit.jpg" alt=""/>},
    { nombre : "The Shining", foto:<img src="/theshining.jpg" alt=""/>} ,
    { nombre : "Misery" , foto: <img src="/fotomisery.jpg" alt=""/>},
    { nombre : "The Crow" , foto: <img src="/fotocrow.jpg" alt=""/>},
    { nombre : "Alien", foto:<img src="/fotoalien.jpg" alt=""/>} ,
    { nombre : "The Thing" , foto: <img src="/fotothing.jpg" alt=""/>},
]

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        
        const promesa = new Promise((res)=>{
            setTimeout(()=>{
                console.log("Soy el timeout")
                res(productosIniciales) 
            },1000)
        })
        
        promesa.then((productos)=>{
            console.log("Todo bien")
            console.log(productos)
            setLoading(false)
            setProductos(productos)
        })

    },[])


    const onAdd = () => { }
    return (
    <div id="recomendadosVhs">
    {productos.map ( (item, idx)=> (
        <ul>
        <li key={idx}>
        <h2> {item.nombre}</h2>
        <h2>{item.foto}</h2>
        </li>
        </ul>
    )
    
    ) }    
    </div>
    )
}





export default ItemListContainer

