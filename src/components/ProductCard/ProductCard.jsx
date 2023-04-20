import React from "react";
import { getProduct } from "../../services/products";
import styles from "./ProductCard.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductCard = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    // useEffect(() => {
    //     console.log("calling use effect in product");
    //     const getProductById = async () => {
    //         console.log("getting product");
    //         const productData = await getProduct(id);
    //         setData(productData);
    //     };
    //     getProductById();
    // }, [id]);

    return (
        data && (
            <div className={styles.product}>
                <div>
                    <img
                        className={styles.product__img}
                        src={data?.image}
                        alt={data?.title}
                    />
                </div>
                <div className={styles.product__text}>
                    <p>{data?.title}</p>
                    <p>{data?.price}</p>
                </div>
            </div>
        )
    );
};

export default ProductCard;
