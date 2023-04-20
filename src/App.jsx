import "./App.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import CarouselPage from "./containers/CarouselPage/CarouselPage";
import { getAllProducts } from "./services/products";

function App() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        console.log("Fetching products");
        setProducts(await getAllProducts());
    };

    useEffect(() => {
        // getProducts();
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
                                    <Home products={products} />
                                </>
                            }
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
