import React, { useEffect, useState } from "react";
import { getProductFromCart } from "../../services/products";
import CartCard from "../CartCard/CartCard";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { useContext } from "react";

const Cart = ({ products, removed, setRemoved }) => {
    const [inCart, setInCart] = useState([]);
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

    useEffect(() => {
        getAllCartProducts();
    }, [inputVal]);

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
                        removed={removed}
                        setRemoved={setRemoved}
                    />
                ))}
            </div>
        </>
    );
};

export default Cart;
