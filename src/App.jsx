import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import CarouselPage from "./containers/CarouselPage/CarouselPage";
import { getAllCartProducts, getAllProducts } from "./services/products";
import PaginatedItems from "./containers/Pagination/Paginate";
import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import { CartContextVal } from "./context/CartContext/CartContext";
import FilteredPage from "./containers/FilteredPage/FilteredPage";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { inputVal, setInputVal } = useContext(CartContextVal);

    useEffect(() => {
        const getProducts = async () => {
            setProducts(await getAllProducts());
        };
        getProducts();
    }, [inputVal]);

    useEffect(() => {
        const getCart = async () => {
            setCart(await getAllCartProducts());
        };
        getCart();
    }, [inputVal]);

    return (
        <div className="App">
            <HashRouter basename="/EShop">
                <div className="navbar">
                    <h3 className="heading">EShop</h3>
                    <Nav />
                </div>
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <CarouselPage products={products} />
                                    <PaginatedItems
                                        itemsPerPage={7}
                                        products={products}
                                    />
                                </>
                            }
                        />
                        <Route
                            path="/products"
                            element={<Home products={products} />}
                        />
                        <Route path="/products/:id" element={<ProductCard />} />
                        <Route
                            path="/cart"
                            element={<Cart products={cart} />}
                        />
                        <Route
                            path="/favourites"
                            element={<FilteredPage products={products} />}
                        />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
