/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import ItemCount from "./ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';

const estrenos = [
    { nombre : "Resident Evil" , foto: <img src="/NEW01.jpg" alt=""/>},
    { nombre : "Halloween Kills", foto:<img src="/NEW02.jpg" alt=""/>} ,
    { nombre : "Spiral" , foto: <img src="/NEW03.jpg" alt=""/>},
    { nombre : "Malignt" , foto: <img src="/NEW04.jpg" alt=""/>},
    { nombre : "Conjuring 3", foto:<img src="/NEW05.jpg" alt=""/>} ,
    { nombre : "Countdown" , foto: <img src="/NEW06.jpg" alt=""/>},
]

const ItemEstrenos = () => {

    const [productos, setEstrenos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        
        const promesa = new Promise((res)=>{
            setTimeout(()=>{
                console.log("Soy el timeout")
                res(estrenos) 
            },2000)
        })
        
        promesa.then((estrenos)=>{
    
            setLoading(false)
            setEstrenos(estrenos)
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





export default ItemEstrenos

