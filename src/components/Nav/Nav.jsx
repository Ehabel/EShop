import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.container}>
            <NavLink className={styles.item} to="/">
                Home
            </NavLink>
            <NavLink className={styles.item} to="/products">
                Products
            </NavLink>
        </nav>
    );
};

export default Nav;
