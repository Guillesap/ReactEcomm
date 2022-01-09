import  React  from "react";
import "./estilo.css"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";


function App(){

    return (
        <BrowserRouter>
            <Header />
            <h1>Bienvenidos a VHS "VideoClub de Terror"</h1>
            <h2>Nuestro catálogo:</h2>
            <Main />
            <Contacto/>
            <Footer /> 
        </BrowserRouter>
    )     
}
export default App

