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
import Cart from "./components/Cart/Cart";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const getProducts = async () => {
        setProducts(await getAllProducts());
    };

    const getCart = async () => {
        setCart(await getAllCartProducts());
    };

    useEffect(() => {
        getProducts();
        getCart();
    }, []);

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
                            element={<Cart products={cart} />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
