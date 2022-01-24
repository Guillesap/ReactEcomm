import {Link} from "react-router-dom"
import CartWidget from './CartWidget';


const NavBar = () =>{


    return (
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div id="elHome">
                    <Link className="navbar-brand" to ="/"><h2>Inicio</h2></Link>
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
                    </ul>
                    <div id= "elCarrito">
                    <Link to={'/Cart'}><CartWidget /></Link>
                    </div>
                    </div>
                </div>
            </nav>

        )
        
    
}

export default NavBar