import React from "react";
import { addToCart, getProduct } from "../../services/products";
import styles from "./ProductCard.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StockLevel from "../StockLevel/StockLevel";
import Favourite from "../Favourite/Favourite";
import { useContext } from "react";
import { CartContextVal } from "../../context/CartContext/CartContext";

const ProductCard = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const { inputVal, setInputVal } = useContext(CartContextVal);

    useEffect(() => {
        const getProductById = async () => {
            const productData = await getProduct(id);
            setData(productData);
        };

        getProductById();
    }, [id]);

    const buttonClicked = () => {
        addToCart(id);
        setInputVal(inputVal + 1);
    };

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
                    <div className={styles.product__text__fav}>
                        <p>{data?.title}</p>
                        <Favourite
                            id={data?.id}
                            favourite={data?.favourite}
                            className={styles.product__fav}
                        />
                    </div>

                    <p>${data?.price}</p>
                    <StockLevel data={data} />
                    <button
                        onClick={buttonClicked}
                        className={styles.cart__btn}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    );
};

export default ProductCard;
