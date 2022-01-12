import  React, { useContext }  from "react";
import {Link} from "react-router-dom"
import Cart from "./Cart.js"
import { contexto } from "../CartContext.js";


const NavBar = () =>{

    const {cantidad_total} = useContext(contexto)

    return (
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div id="elHome">
                    <Link className="navbar-brand" to ="/"><h2>Home</h2></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/novedades"><h2>Novedades</h2></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/clasicos"><h2>Clásicos</h2></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/paranormal"><h2>Paranormal</h2></Link>
                        </li>  
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/serial"><h2>Killers</h2></Link>
                        </li>  
                    </ul>
                    <div id= "elCarrito">
                    <Link to="/Cart">
                    <span className="material-icons">shopping_cart
                    </span>
                    <h2>{cantidad_total}</h2>
                    </Link>
                    </div>
                    </div>
                </div>
            </nav>

        )
        
    
}

export default NavBar