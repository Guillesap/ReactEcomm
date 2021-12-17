import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import Saludo from "./greeting";
import MyButton from "./button";
import Contador from './container/Contador';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    const footerData = {
        copyright :"Copyright© 2021",
        author: "Guille Sapag"
    }

return(
<>
    <Navbar titulo ="Video Club Willy"/>
    <h1 id="tItulo"> Streaming y Venta de VHS para los nostálgicos.</h1>
    <Saludo/>
    <Peliculas/>
    <Contador stock={10 } initial={1}/>
    <MyButton label ="Estrenos Onlines"/>
    <MyButton label ="Peliculas Clasicas"/>
    <MyButton label ="Ofertas en VHS"/>
    <Footer data ={footerData}/>
</>
)
}

export default App;
