
import "./estilo.css"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import CartProvider from "./CartContext";




function App(){

    return (
        <CartProvider> 
        <BrowserRouter>
            <Header />
            <h1>Bienvenidos a VHS "Video Club "</h1>
            <h2>"Las mejores películas de Terror"</h2>
            <Main />
            <Contacto/>
            <Footer />  
        </BrowserRouter>
        </CartProvider> 
        
    )     
}
export default App

