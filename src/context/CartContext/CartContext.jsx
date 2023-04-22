import { createContext } from "react";
import { useState } from "react";

export const CartContextVal = createContext();

const CartContext = ({ children }) => {
    const [inputVal, setInputVal] = useState(0);
    const val = { inputVal, setInputVal };

    return (
        <CartContextVal.Provider value={val}>
            {children}
        </CartContextVal.Provider>
    );
};

export default CartContext;
