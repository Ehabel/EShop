import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getProductFromCart } from "../../services/products";

const Cart = ({ products }) => {
    const [inCart, setInCart] = useState([]);
    const getItemsInCart = async () => {
        const unresolvedPromises = products.map(async (product) => {
            // console.log(await getProductFromCart(product.itemId));
            return await getProductFromCart(product.itemId);
        });
        console.log(unresolvedPromises);
        const results = await Promise.all(unresolvedPromises);
        return results;
    };

    const getAllCartProducts = async () => {
        setInCart(await getItemsInCart());
    };

    useEffect(() => {
        getAllCartProducts();
        // const getProductById = async () => {
        //     const productData = await getProductFromCart(products[0].id);
        //     setInCart(productData);
        // };
        // getProductById();
    }, []);

    console.log("In Cart", inCart);
    return (
        <>
            <h2>Cart</h2>
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
            </div>
        </>
    );
};

export default Cart;
