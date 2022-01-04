// eslint-disable-next-line no-unused-vars
import Nav from './Nav'

const Footer = ({links,data:{copyright,author}}) => {
    return (
        <footer>
            <p>{copyright}. Todos los derechos reservados.  {author}</p>
        </footer>
    )
}

export default Footer