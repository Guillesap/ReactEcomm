import { Link } from "react-router-dom"

const Nav = ({ links }) => {
    return (
        <nav>
            <span className="material-icons">
                shopping_cart
            </span>
            {links.map((elemento, indice) => {
                return <Link key={indice} to={`/categoria/${elemento}`}>{elemento}</Link>
            })}
        </nav>
    )
}

export default Nav
