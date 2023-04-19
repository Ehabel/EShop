import React from "react";
import ProductsList from "../../containers/ProductsList/ProductsList";

const Home = ({ products }) => {
    return (
        <div>
            <ProductsList products={products} />
        </div>
    );
};

export default Home;
