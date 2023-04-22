import React from "react";
import { useState } from "react";
import styles from "./StockLevel.module.scss";

const StockLevel = ({ data }) => {
    const [size, setSize] = useState("none");

    const handleSize = (e) => {
        setSize(e.target.value);
    };
    return (
        <div className={styles.stock}>
            <div className={styles.stock__container}>
                {data.variants.map((size, index) => {
                    return (
                        <button
                            className={styles.stock__container__item}
                            key={index}
                            onClick={handleSize}
                            value={size}
                        >
                            {size}
                        </button>
                    );
                })}
            </div>
            {data?.quantities?.[size] > 0 ? (
                <p className={styles.stock__container__item__num}>
                    {data.quantities[size]} In Stock
                </p>
            ) : data.quantities[size] === 0 ? (
                <p className={styles.stock__container__item__num}>
                    Out of Stock
                </p>
            ) : (
                <p className={styles.stock__container__item__num}>
                    Select a size
                </p>
            )}
        </div>
    );
};

export default StockLevel;
