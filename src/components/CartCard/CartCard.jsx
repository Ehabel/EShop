import React from "react";
import styles from "./CartCard.module.scss";
import { removeFromCart } from "../../services/products";
import { CartContextVal } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
    library.add(faTrash);
    const { inputVal, setInputVal } = useContext(CartContextVal);
    const removeItem = () => {
        removeFromCart(idCart);
        setRemoved(removed + 1);
        setInputVal(inputVal + 1);
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
                            {quantity}
                        </span>
                    </p>
                </div>
                <p>Total: ${quantity * price}</p>
                <div className={styles.product__text__cart}>
                    {/* <button>-</button>
                    <p>1</p>
                    <button>+</button> */}
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
