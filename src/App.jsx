import "./App.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import { BrowserRouter } from "react-router-dom";
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

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [added, setAdded] = useState(0);
    const [removed, setRemoved] = useState(0);
    const { inputVal, setInputVal } = useContext(CartContextVal);

    const getProducts = async () => {
        setProducts(await getAllProducts());
    };

    const getCart = async () => {
        setCart(await getAllCartProducts());
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getCart();
    }, [inputVal, removed]);

    return (
        <div className="App">
            <BrowserRouter basename="/eshop">
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
                                    <CarouselPage />
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
                            element={
                                <Cart
                                    removed={removed}
                                    setRemoved={setRemoved}
                                    products={cart}
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
