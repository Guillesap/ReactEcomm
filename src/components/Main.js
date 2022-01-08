import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Cart from "./Cart"
import { Routes, Route } from "react-router-dom"


const Main = ({ titulo }) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </main>
    )
}

export default Main