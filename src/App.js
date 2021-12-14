import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Peliculas from "./components/Peliculas/Peliculas";
import Saludo from "./greeting";

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
<Footer data ={footerData}/>
</>
)
}

export default App;
