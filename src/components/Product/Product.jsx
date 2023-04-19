import React from "react";
import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unfilled } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { updateProduct } from "../../services/products";

const Product = ({ name, price, imgLink, id }) => {
    const [fav, setFav] = useState(false);
    library.add(faHeart);
    library.add(unfilled);
    const favClick = async () => {
        setFav(!fav);
        await updateProduct(id, {
            favourite: !fav,
        });
    };
    return (
        <div className={styles.product}>
            {!fav ? (
                <FontAwesomeIcon
                    className={styles.product__fav}
                    icon="fa-regular fa-heart"
                    size="2xl"
                    style={{ color: "#FF00BD" }}
                    onClick={favClick}
                />
            ) : (
                <FontAwesomeIcon
                    className={styles.product__fav}
                    icon="fa-solid fa-heart"
                    size="2xl"
                    style={{ color: "#FF00BD" }}
                    onClick={favClick}
                />
            )}
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
                    <p>{price}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Product;
