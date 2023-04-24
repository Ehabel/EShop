import React from "react";
import styles from "./CartCard.module.scss";
import {
    getProduct,
    removeFromCart,
    updateProduct,
} from "../../services/products";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

const CartCard = ({
    name,
    price,
    imgLink,
    id,
    variant,
    quantity,
    idCart,
    removed,
    setRemoved,
    product,
}) => {
    const [newQuant, setNewQuant] = useState(parseInt(quantity));
    const [newQuantCpy, setNewQuantCpy] = useState(newQuant);

    library.add(faTrash);
    const { inputVal, setInputVal } = useContext(CartContextVal);

    const updateProductQuant = async () => {
        const newObj = {
            quantities: {
                ...product.quantities,
                [variant]:
                    parseInt(product.quantities[variant]) + parseInt(quantity),
            },
        };
        await updateProduct(id, newObj);
    };

    const removeItem = () => {
        removeFromCart(idCart);
        setRemoved(removed + 1);
        setInputVal(inputVal + 1);
        updateProductQuant();
    };

    const onClickInc = () => {
        if (newQuant < newQuantCpy + product.quantities[variant]) {
            setNewQuant(newQuant + 1);
        }
    };

    const onClickDec = () => {
        if (newQuant > 0) {
            setNewQuant(newQuant - 1);
        }
    };

    const saveChanges = async () => {
        if (newQuant === 0) {
            removeItem();
        } else {
            const newObj = {
                quantities: {
                    ...product.quantities,
                    [variant]:
                        newQuantCpy +
                        parseInt(product.quantities[variant]) -
                        newQuant,
                },
            };
            await updateProduct(id, newObj);
        }
        setInputVal(inputVal + 1);
        setNewQuantCpy(newQuant);
    };

    return (
        <div className={styles.product}>
            <div>
                <img className={styles.product__img} src={imgLink} alt={name} />
            </div>
            <div className={styles.product__text}>
                <p>{name}</p>
                <p>${price}</p>
                <div className={styles.product__text__bought}>
                    <p className={styles.product__text__bought__text}>
                        Size:{" "}
                        <span className={styles.product__text__bought__span}>
                            {variant}
                        </span>
                    </p>
                    <p className={styles.product__text__bought__text}>
                        Quantity:{" "}
                        <span className={styles.product__text__bought__span}>
                            {newQuantCpy}
                        </span>
                    </p>
                </div>
                <p>Total: ${quantity * price}</p>
                <div className={styles.product__text__cart}>
                    <button onClick={onClickDec}>-</button>
                    <p>{newQuant}</p>
                    <button onClick={onClickInc}>+</button>
                    <button onClick={saveChanges}>Save</button>
                    <button onClick={removeItem}>
                        <FontAwesomeIcon
                            icon="fa-solid fa-trash"
                            style={{ color: "#000000" }}
                            className={styles.trash}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
