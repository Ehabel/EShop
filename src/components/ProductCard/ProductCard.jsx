import React from "react";
import { addToCart, getProduct, updateProduct } from "../../services/products";
import styles from "./ProductCard.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StockLevel from "../StockLevel/StockLevel";
import Favourite from "../Favourite/Favourite";
import { useContext } from "react";
import { CartContextVal } from "../../context/CartContext/CartContext";

const ProductCard = () => {
    const [data, setData] = useState(null);
    const [variant, setVariant] = useState(null);
    const { id } = useParams();
    const { inputVal, setInputVal } = useContext(CartContextVal);

    const updateProductQuant = async () => {
        const newObj = {
            quantities: {
                ...data.quantities,
                [variant.variant]:
                    parseInt(data.quantities[variant.variant]) -
                    parseInt(variant.quantity),
            },
        };
        await updateProduct(data.id, newObj);
    };

    useEffect(() => {
        const getProductById = async () => {
            const productData = await getProduct(id);
            setData(productData);
        };
        getProductById();
    }, [id]);

    const buttonClicked = () => {
        if (variant) {
            addToCart(id, variant.variant, variant.quantity);
            setInputVal(inputVal + 1);
            updateProductQuant();
        }
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
                    <StockLevel
                        data={data}
                        variant={variant}
                        setVariant={setVariant}
                    />
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
