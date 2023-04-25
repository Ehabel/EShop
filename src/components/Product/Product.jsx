import React from "react";
import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";
import Favourite from "../Favourite/Favourite";

const Product = ({ name, price, imgLink, id, favourite }) => {
    return (
        <div className={styles.product}>
            <Favourite
                className={styles.product__fav}
                id={id}
                favourite={favourite}
            />
            <NavLink to={`/products/${id}`}>
                <div>
                    <img
                        className={styles.product__img}
                        src={imgLink}
                        alt={name}
                    />
                </div>
                <div className={styles.product__text}>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Product;
