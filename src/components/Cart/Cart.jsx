import React, { useEffect, useState } from "react";
import { getProductFromCart } from "../../services/products";
import CartCard from "../CartCard/CartCard";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import styles from "./Cart.module.scss";

const Cart = ({ products }) => {
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
        const getAllCartProducts = async () => {
            const cartStuff = await getItemsInCart();
            setInCart(cartStuff);
        };
        getAllCartProducts().catch((e) => e);
    }, [inputVal, products]);

    useEffect(() => {
        const newPrice = setTotalPrice();
        setPriceCart(newPrice);
    }, [inCart, inputVal]);
    return (
        <>
            <h2>Cart</h2>
            <div>
                {inCart.map((product) => (
                    <CartCard
                        key={`cart${product.id}${product.variant}`}
                        name={product.title}
                        price={product.price}
                        imgLink={product.image}
                        id={product.id}
                        idCart={product.idCart}
                        favourite={product.favourite}
                        variant={product.variant}
                        quantity={product.quantity}
                        product={product}
                    />
                ))}
                <div className={styles.text}>Total Price: ${priceCart}</div>
            </div>
        </>
    );
};

export default Cart;
