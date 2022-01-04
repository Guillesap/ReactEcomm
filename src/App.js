import Header from './Header'
import Footer from "./Footer"
import Main from './Main'
import { BrowserRouter } from "react-router-dom"
import { useEffect, useState } from 'react'


function App() {

    const titulo = "Video Online"
    const footerData = {
        copyright: "Copyright © 2022",
        author: "Willy S"
    }
    const home_titulo = "Home"
    const array = ["Home", "Clásicos", "Terror"]


    const [show, setShow] = useState(false)

    return (
        <BrowserRouter>
            <Header titulo={titulo} links={array} />
            <h1>Bienvenidos VHS Online VideoClub!</h1>
            <h2>Nuestros recomendados del mes</h2>
            <Main titulo={home_titulo} />
            <Footer data={footerData} links={array} />
        </BrowserRouter>
    )
}

export default App