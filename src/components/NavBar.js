import  React  from "react";
import {Link} from "react-router-dom"

import CardWidget from "./CardWidget.js"

const NavBar = () =>{
    return (
            <nav className="navbar navbar-expand-lg navbar-light ">
                <CardWidget />
                <div className="container-fluid">
                    <Link className="navbar-brand" to ="/">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/clasicos">Clásicos</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/novedades">Novedades</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
        
    
}

export default NavBar