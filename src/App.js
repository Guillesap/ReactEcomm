import  React  from "react";
import "./estilo.css"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart"


function App(){

    return (
        <BrowserRouter>
            <Header />
            <Cart/>
            <h1>Bienvenidos VHS Online VideoClub!</h1>
            <h2>Nuestros recomendados del mes</h2>
            <Main />
            <Contacto/>
            <Footer /> 
        </BrowserRouter>
    )     
}
export default App

