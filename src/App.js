import './index.js';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import Saludo from "./greeting";
import MyButton from "./button";
import Contador from './ItemListContainer/Contador';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './ItemListContainer/List.js';




function App() {
    const footerData = {
        copyright :"Copyright© 2021",
        author: "Willy Sapag"
    }

return(
<>
    <Navbar titulo ="Video Club Willy"/>
    <h1 id="tItulo"> Streaming  y Venta de VHS para los nostálgicos.</h1>
    <Saludo/>
    <Peliculas/>
    <h2>Nuestro Video recomendado</h2>
    <List/>
    <Contador stock={10 } initial={1}/>
    <MyButton label ="Estrenos Onlines"/>
    <MyButton label ="Peliculas Clasicas"/>
    <MyButton label ="Ofertas en VHS"/>
    <Footer data ={footerData}/>
</>
)
}

export default App;
