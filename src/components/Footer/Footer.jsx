import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__child}>
                <p>A site built in ReactJs with Vite</p>
            </div>
        </div>
    );
};

export default Footer;
