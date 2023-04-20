import React from "react";
import Product from "../../components/Product/Product";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products }) => {
    return (
        <div className={styles.products}>
            <h2 className={styles.header}>Products</h2>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.title}
                    price={product.price}
                    imgLink={product.image}
                    id={product.id}
                    favourite={product.favourite}
                />
            ))}
        </div>
    );
};

export default ProductsList;
