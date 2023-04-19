import React from "react";
import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";

const Product = ({ name, price, imgLink, id }) => {
    return (
        <div className={styles.product}>
            <NavLink to={`/products/${id}`}>
                <div>
                    <img
                        className={styles.product__img}
                        src={imgLink}
                        alt={name}
                    />
                    <p className={styles.product__fav}>H</p>
                </div>
                <div className={styles.product__text}>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Product;
