import React from "react";
import { useState } from "react";
import styles from "./StockLevel.module.scss";

const StockLevel = ({ data, variant, setVariant }) => {
    const [size, setSize] = useState("none");
    const [quant, setQuant] = useState(1);

    const handleSize = (e) => {
        console.log(quant);
        setSize(e.target.value);
    };

    const increaseQuant = (e) => {
        if (quant < data.quantities[size]) {
            setQuant(quant + 1);
            setVariant({
                variant: size,
                quantity: quant + 1,
            });
        }
    };

    const decreaseQuant = (e) => {
        if (quant > 1) {
            setQuant(quant - 1);
            setVariant({
                variant: size,
                quantity: quant - 1,
            });
        }
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
            <div className={styles.stock__container}>
                <button
                    className={styles.stock__container__item}
                    onClick={decreaseQuant}
                >
                    -
                </button>
                <p>{quant}</p>
                <button
                    className={styles.stock__container__item}
                    onClick={increaseQuant}
                >
                    +
                </button>
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
