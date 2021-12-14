import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Peliculas from "./components/Peliculas/Peliculas";

function App() {
return(
<>
<Navbar/>
    <h1 id="tItulo">Bienvenido al Video Club más terrorífico de la Net!</h1>
<Peliculas/>
<Footer/>
</>
)
}

export default App;
