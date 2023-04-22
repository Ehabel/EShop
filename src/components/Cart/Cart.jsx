import React, { useEffect, useState } from "react";
import { getProductFromCart } from "../../services/products";
import CartCard from "../CartCard/CartCard";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import styles from "./Cart.module.scss";

const Cart = ({ products, removed, setRemoved }) => {
    const [inCart, setInCart] = useState([]);
    const [priceCart, setPriceCart] = useState(0);
    const { inputVal, setInputVal } = useContext(CartContextVal);

    const getItemsInCart = async () => {
        const unresolvedPromises = products.map(async (product) => {
            return await getProductFromCart(product.itemId, product.id);
        });
        const results = await Promise.all(unresolvedPromises);
        return results;
    };

    const getAllCartProducts = async () => {
        setInCart(await getItemsInCart());
    };

    const setTotalPrice = () => {
        const prices = inCart.map((cartItem) => {
            return cartItem.quantity * cartItem.price;
        });

        const finalPrice = prices.reduce((acc, val) => {
            return acc + val;
        }, 0);
        return finalPrice;
    };

    useEffect(() => {
        getAllCartProducts();
    }, [inputVal]);

    useEffect(() => {
        setPriceCart(setTotalPrice());
    }, [inCart]);

    return (
        <>
            <h2>Cart</h2>
            <div>
                {inCart.map((product) => (
                    <CartCard
                        key={`cart${product.id}`}
                        name={product.title}
                        price={product.price}
                        imgLink={product.image}
                        id={product.id}
                        idCart={product.idCart}
                        favourite={product.favourite}
                        variant={product.variant}
                        quantity={product.quantity}
                        removed={removed}
                        setRemoved={setRemoved}
                    />
                ))}
                <div className={styles.text}>Total Price: ${priceCart}</div>
            </div>
        </>
    );
};

export default Cart;
