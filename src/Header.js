import Nav from "./Nav"
import {Link} from "react-router-dom"
import "./Header.scss"

function Header({ titulo, links }) {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="/logovhs.png" alt="logo" />
                </Link>
            </div>
            <Nav links={links} />
        </header>
    )
}

export default Header