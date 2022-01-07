import  React  from "react";
import {Link} from "react-router-dom"

import NavBar from "./NavBar.js"

function Header(){
    return (
        <header>
            <Link to ="/">
                <img src="../img/logovhs.png" alt="logo" width={200} ></img>
            </Link>
            <NavBar /> 
        </header>
    )     
}
export default Header