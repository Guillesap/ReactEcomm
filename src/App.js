import { useState,useEffect} from 'react';
import './index.js';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import Saludo from "./greeting";
import MyButton from "./button";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer.js';
import ItemDetail from './ItemListContainer/ItemDetail.js'



function App() {


    const footerData = {
        copyright :"Copyright© 2021",
        author: "Willy Sapag"
    }

const [estado ] = useState(false);
console.log(estado);

useEffect (() => {
    console.log("Aca está el efecto");

    setTimeout (()=>{
        console.log("Se activa");
    },2000)
    setInterval(() => {
        console.log("Aqui tenes el intervalo");
    }, 8000);
    
})



return(
<>
    <Navbar titulo ="Video Club Willy"/>
    <h1 id="tItulo"> Streaming  y Venta de VHS/DVD para los nostálgicos.</h1>
    <Saludo/>
    <Peliculas/>
    <h1>Nuestros videos de Culto</h1>
    <ItemListContainer greeting={"Gracias por ingresar a nuestro Site!"} initial={1} stock={5}/>
    <ItemDetail/>
    <MyButton label ="Peliculas Clasicas"/>
    <MyButton label ="Ofertas en VHS"/>
    <Footer data ={footerData}/>
</>
)
}

export default App;
