import React from "react";
import styles from "./CartCard.module.scss";
import { removeFromCart } from "../../services/products";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { useContext } from "react";

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
}) => {
    const { inputVal, setInputVal } = useContext(CartContextVal);
    const removeItem = () => {
        console.log("Removing item");
        removeFromCart(idCart);
        setRemoved(removed + 1);
        setInputVal(inputVal + 1);
    };
    return (
        <div className={styles.product}>
            <div>
                <img className={styles.product__img} src={imgLink} alt={name} />
            </div>
            <div>
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
                            {quantity}
                        </span>
                    </p>
                </div>

                <div className={styles.product__text__cart}>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                    <button onClick={removeItem}>RM</button>
                </div>
                <p>Total: ${quantity * price}</p>
            </div>
        </div>
    );
};

export default CartCard;
