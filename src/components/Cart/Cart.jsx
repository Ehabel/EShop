import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { getProductFromCart } from "../../services/products";

const Cart = ({ added, setAdded, products }) => {
    const productsArr = [];
    const [inCart, setInCart] = useState([]);
    const getItemsInCart = async () => {
        products.map(async (product) => {
            console.log(await getProductFromCart(product.itemId));
            productsArr.push(await getProductFromCart(product.itemId));
        });
    };
    useEffect(() => {
        console.log("Getting cart products");
        const getAllCartProducts = async () => {
            setInCart(await getItemsInCart());
        };
        getAllCartProducts();
    }, []);
    return (
        <>
            {/* <h2>Cart</h2>
            <div>
                {inCart.map((product) => (
                    <Product
                        key={product.id}
                        name={product.title}
                        price={product.price}
                        imgLink={product.image}
                        id={product.id}
                        favourite={product.favourite}
                    />
                ))}
            </div> */}
        </>
    );
};

export default Cart;
