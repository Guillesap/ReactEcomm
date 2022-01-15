import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { contexto } from "../CartContext";

const detalle= [
    {id: 1, stock: 5, nombre: "Resident Evil", precio: 3500, img: "/img/NEW01.jpg", categoria: "novedades", detalle: "Pelicula de horror y supervivencia, basado en el mitico juego de video. Año 2021."},
    {id: 2, stock: 5, nombre: "Halloweewn Kills", precio: 4000, img: "/img/NEW02.jpg", categoria: "novedades", detalle: "Remake de pelicula clásica de horror, con uno de los mejores serial Killers: Michael Myers. . Año 2021."},
    {id: 3, stock: 5, nombre: "Maligno", precio: 3000, img: "/img/NEW04.jpg", categoria: "novedades", detalle: "Madison está paralizada por visiones de asesinatos espeluznantes, y su tormento empeora cuando descubre que estos sueños de vigilia son, de hecho, realidades aterradoras. Año 2021."},
    {id: 4, stock: 5, nombre: "Spiral", precio: 2500, img: "/img/NEW03.jpg", categoria: "novedades", detalle: "Nueva entrega de la saga Saw. Jigsaw a pesar de su muerte sigue acechando!. Año 2021."},
    {id: 5, stock: 10, nombre: "La Purga", precio: 2100, img: "/img/NOVLAPURGA.jpg", categoria: "novedades", detalle: "Nueva entrega de la Película en la cual los nuevos Padres de la patria, habilitan a matar por un dia!. Año 2021."},
    {id: 6, stock: 7, nombre: "Wrong Turn", precio: 2500, img: "/img/NOVWRONG.jpg", categoria: "novedades", detalle: "Nueva entrega de la película en la cual tomar un camino equivocado, puede acabar con tu vida!. Año 2021."},
    {id: 7, stock: 11, nombre: "Countdown", precio: 2100, img: "/img/NOVLAHORA.jpg", categoria: "novedades", detalle: "Una app que te marca exactamente la hora de tu muerte, la bajarias? Año 2021."},
    {id: 8, stock: 7, nombre: "The Conjuring", precio: 2700, img: "/img/NOVCONJURO.jpg", categoria: "novedades", detalle: "Nueva entrega de la saga del matrionio Warren, los investigadores paranormales y  caza espíritus mas famosos del mundo!. Año 2021."},
    {id: 9, stock: 5, nombre: "Scream 2", precio: 2000, img: "/img/foto4scream.jpg", categoria: "clasicos", detalle: "Dos años después de la masacre en Woodsboro, Sidney y Randy tratan de reconstruir sus vidas en otra ciudad. Su tranquilidad se verá perturbada por una ola de brutales asesinatos cometidos por un psicópata enmascarado. Año 1997."},
    {id: 10, stock: 5, nombre: "It", precio: 2500, img: "/img/fotoit.jpg", categoria: "clasicos", detalle: "Un pueblo de Maine está siendo aterrorizado por una fuerza malévola oculta tras la máscara de un payaso. Hartos de ver como las víctimas se suceden una tras otra, siete amigos de una pandilla de la infancia deciden unirse para luchar contra el mal. Año 1990."},
    {id: 11, stock: 5, nombre: "Misery", precio: 3000, img: "/img/fotomisery.jpg", categoria: "clasicos", detalle: "Un autor se recupera de un accidente en la casa de una admiradora psicótica, quien le exige que escriba un libro solo para ella. Año 1990."},
    {id: 12, stock: 5, nombre: "The Thing", precio: 3500, img: "/img/fotothing.jpg", categoria: "clasicos", detalle: "Un equipo científico de la Antártida descubre un ente extraño que podría ser letal para la humanidad, un extraterrestre que puede duplicar otras formas de vida. Año 1982."},
    {id: 13, stock: 5, nombre: "The Crow", precio: 2100, img: "/img/fotocrow.jpg", categoria: "clasicos", detalle: "Eric Draven, un joven guitarrista de rock, es brutalmente asesinado junto a su prometida Shelly. Un año después, Eric vuelve a la Tierra, guiado por un cuervo negro, en busca de venganza. Año 1994."},
    {id: 14, stock: 5, nombre: "The Cube", precio: 2200, img: "/img/foto1cubo.jpg", categoria: "clasicos", detalle: "Seis personas se despiertan en lo que al principio parece ser una celda. Pronto se dan cuenta de que no están en una celda normal, si no en un extraño rompecabezas en forma de cubo lleno de sorpresas mortales. Año 1997."},
    {id: 15, stock: 5, nombre: "Friday 13th", precio: 3500, img: "/img/foto5viernes.jpg", categoria: "clasicos", detalle: "El campamento de verano del lago Cristal reabre sus puertas tras permanecer varios años cerrado a raíz de un accidente. A partir de ese momento, comienza a aparecer gente muerta en extrañas circunstancias Año 1980."},
    {id: 16, stock: 5, nombre: "Saw", precio: 4500, img: "/img/foto0jigsaw.jpg", categoria: "clasicos", detalle: "Pelicula de culto, en la cual uno de los mas aterradores Asesinos: Jigsaw, atrapa a sus victimas y las obliga a jugar jugos muy particulares. Año 2003."},
    {id: 17, stock: 5, nombre: "Blair Witch", precio: 5000, img: "/img/PARABRUJA.jpg", categoria: "paranormal", detalle: "Unos jóvenes investigan la desaparición de la hermana de uno de ellos, de quien se perdió el rastro en 1994 en un bosque vinculado a la leyenda de la bruja de Blair. Cuando llegan al lugar, conocen a un grupo de personas que se ofrecen a guiarlos, pero pronto sienten que una oscura presencia los acecha. Año 2016."},
    {id: 18, stock: 3, nombre: "Grudge", precio: 3500, img: "/img/PARAGRUDGE.jpg", categoria: "paranormal", detalle: "Karen, una joven enfermera, tiene que cuidar de una anciana que vive en una casa donde suceden cosas muy extrañas. Nada más llegar, se encuentra en el piso de arriba de la vivienda a un niño de seis años que lleva un gato negro en los brazos. Año 2005."},
    {id: 19, stock: 4, nombre: "Insidius", precio: 3000, img: "/img/PARAINSIDIUS.jpg", categoria: "paranormal", detalle: "Josh (Patrick Wilson), su esposa Renai (Rose Byrne) y sus tres hijos acaban de mudarse a una vieja casa. Pero, tras un desgraciado accidente, uno de los niños entra en coma y, al mismo tiempo, empiezan a producirse en la casa extraños fenómenos que aterrorizan a la familia. Año 2011."},
    {id: 20, stock: 7, nombre: "Ouija", precio: 3100, img: "/img/PARAOUIJA.jpg", categoria: "paranormal", detalle: "Tras la reciente y repentina muerte de Debbie, Laine convence a su grupo de amigos para tratan de invocar su presencia con ayuda de una 'ouija', pero en lugar de llamar a su amiga, despiertan a una oscura presencia. Año 2014."},
    {id: 21, stock: 6, nombre: "Paranormal", precio: 2100, img: "/img/PARAPARA.jpg", categoria: "paranormal", detalle: "Pelicula de culto,en esta entrega, la película sigue a una joven que intenta descubrir qué sucedió con su madre, que desapareció hace años, hasta que descubre una verdad aterradora sobre su pasado. Año 2021."},
    {id: 22, stock: 8, nombre: "Poltergeist", precio: 2200, img: "/img/PARAPOLTER.jpg", categoria: "paranormal", detalle: "Tras ser despedido de su trabajo, Eric Bowen se muda junto a su familia a una nueva casa en un apartado barrio residencial. Sin embargo, la familia se ve amenazada por espíritus que habitaron la casa en un pasado. El ataque sobrenatural se centra en la hija del matrimonio. Año 2015."},
    {id: 23, stock: 6, nombre: "Sinister", precio: 3700, img: "/img/PARASINISTER.jpg", categoria: "paranormal", detalle: "Ellison Oswald, escritor de historias criminales está en una mala racha, no ha tenido un éxito en más de 10 años y está desesperado. Cuando descubre una película que muestra las muertes de una familia, él promete resolver el misterio. Él mueve a su propia familia a la casa de las víctimas y se pone a trabajar. Año 2012."},
    {id: 24, stock: 8, nombre: "The Ring", precio: 4500, img: "/img/PARARING.jpg", categoria: "paranormal", detalle: "Tras visionar una cinta de vídeo con perturbadoras imágenes recibes una llamada que anuncia tu muerte. Siete días después, la profecía se cumple. Año 2002."},
    {id: 25, stock: 5, nombre: "Jason X", precio: 3000, img: "/img/SERIALJASONX.jpg", categoria: "serial", detalle: "Varios arqueólogos descubren dos cuerpos congelados: una mujer y un hombre con la cara cubierta por una máscara. Sin saberlo, han despertado a Jason. Año 2002."},
    {id: 26, stock: 6, nombre: "Candyman", precio: 3000, img: "/img/SERIALCANDY.jpg", categoria: "serial", detalle: "Tras visionar una cinta de vídeo con perturbadoras imágenes recibes una llamada que anuncia tu muerte. Siete días después, la profecía se cumple. Año 2002."},
    {id: 27, stock: 10, nombre: "Chucky", precio: 3000, img: "/img/SERIALCHUCKY.jpg", categoria: "serial", detalle: "En la Universidad de Chicago, la estudiante Helen Lyle investiga la leyenda que rodea a Candyman, un fantasma que aparece cada vez que su nombre se pronuncia cinco veces ante un espejo. A propósito de la investigación de Helen, un profesor explica la base histórica de la leyenda y las supersticiones que la rodean. Año 1992."},
    {id: 28, stock: 4, nombre: "Leatherface", precio: 3000, img: "/img/SERIALEATHERFACE.jpg", categoria: "serial", detalle: "Texas, 1955. El joven Jed Sawyer es el menor de los hijos de una familia de psicópatas asesinos. Jed y sus hermanos son enviados a un centro psiquiátrico para menores, tras asesinar a la hija del Ranger Hartman. Allí, les borran todo rastro de su antigua identidad. Año 2017."},
    {id: 29, stock: 3, nombre: "Hannibal", precio: 3000, img: "/img/SERIALHANNIBAL.jpg", categoria: "serial", detalle: "Hace diez años que el Dr. Hannibal Lecter conoció a la agente Clarice Starling y huyó del hospital de máxima seguridad, pero ninguno de los dos ha podido olvidarse del otro. Mason Verger también recuerda a Hannibal y está obsesionado con vengarse. Año 2001."},
    {id: 30, stock: 2, nombre: "Pesadilla Final", precio: 3000, img: "/img/SERIALFREDDY.jpg", categoria: "serial", detalle: "Freddy Krueger ha conseguido finalmente matar a todos los adolescentes de su ciudad y ahora decide mudarse para conseguir nuevas presas. Para ello necesita la ayuda de su propia hija, pero esta está dispuesta a enfrentarse a él tras averiguar el origen demoníaco de los poderes de su padre. Año 1992."},
    {id: 31, stock: 1, nombre: "Slender Man", precio: 2500, img: "/img/SERIALSLENDERMAN.jpg", categoria: "serial", detalle: "Un grupo de amigas descubre en internet a una extraña y espeluznante criatura conocida como slender man. El misterioso ser, de origen desconocido y aterradores poderes, despierta la curiosidad y el morbo de las jóvenes y deciden invocarlo.. Año 2018."},
    {id: 32, stock: 4, nombre: "Psicosis", precio: 4000, img: "/img/SERIALPSICOSIS.jpg", categoria: "serial", detalle: "La secretaria de una empresa inmobiliaria, Marion Crane, no puede casarse con su amante, Sam Loomis. El destino pone en sus manos 40.000 dólares en efectivo que su jefe le confía para depositarlos en el banco. Marion decide apoderarse de esa suma para comenzar con Sam una nueva vida. Año 1960."},

]

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ({})
    const [added, setAdded] = useState(false);
    const { id } = useParams()
    const { addToCart } = useContext(contexto);
    console.log(id)

    useEffect(() => {
        if(id){
            const ProductoSeleccionado = detalle.find(e => e.id === parseInt(id))
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(ProductoSeleccionado )
                }, 1000)
            })
            promesa
                .then((producto) => {
                    console.log("Great")
                    setProducto(producto)
                })
                .catch(() => {
                    console.log("Bad")
                })
        }
        
    }, [id])

    const onAdd = (count) => {
        addToCart(producto, count);
        setAdded(true); // seteo en tru cuando es agregado el producto
      }
    return (
        <div>
            <ItemDetail item={producto} onAdd={onAdd} added={added}/>
        </div>
    )
}

export default ItemDetailContainer