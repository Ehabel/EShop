import "./App.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import Product from "./components/Product/Product";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";
import { addProducts, getAllProducts } from "./services/products";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("Fetching products");
        const getProducts = async () => {
            setProducts(await getAllProducts());
        };
        getProducts();
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
                            element={<Home products={products} />}
                        />
                        <Route
                            path="/products"
                            element={<ProductsList products={products} />}
                        />
                        <Route path="/products/:id" element={<ProductCard />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
